import dayjs from 'dayjs'
import { inject, injectable } from 'tsyringe'

import { ICreateAppointmentDTO } from '@modules/appointment/dtos/IAppointmentDTO'
import { Appointment } from '@modules/appointment/infra/typeorm/entities/Appointment'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'
import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'
import { AppError } from '@shared/errors/AppError'

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository:IAppointmentRepository,
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) {}

  async execute({ date, serviceId, userId }:ICreateAppointmentDTO): Promise<Appointment> {
    const service = await this.serviceRepository.findById(serviceId)

    async function IsBefore(inicialDate:Date, finalDate:Date) {
      return dayjs(inicialDate).isBefore(finalDate)
    }

    IsBefore(date, new Date())
    if (await IsBefore(date, new Date())) {
      throw new AppError("You can't create an appointment on a past date.")
    }

    const limitSchedule = dayjs().add(7, 'day').toDate()

    async function IsAfter(higherDate:Date, lowerDate:Date) {
      return dayjs(higherDate).isAfter(lowerDate)
    }

    if (await IsAfter(date, limitSchedule)) {
      throw new AppError('You cannot schedule a new service more than 7 days ahead')
    }

    if (userId === service.userId) {
      throw new AppError("You can't create an appointment with yourself.")
    }

    const appointment = this.appointmentRepository.create({ date, serviceId, userId })

    return appointment
  }
}
export { CreateAppointmentUseCase }
