import { inject, injectable } from 'tsyringe'

import { Appointment } from '@modules/appointment/infra/typeorm/entities/Appointment'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

@injectable()
class ListCustomerAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository:IAppointmentRepository
  ) {}

  async execute(userId:string): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.findClientAppointments(userId)

    return appointments
  }
}

export { ListCustomerAppointmentUseCase }
