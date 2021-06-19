import { inject, injectable } from 'tsyringe'

import { Appointment } from '@modules/appointment/infra/typeorm/entities/Appointment'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

@injectable()
class ListProviderAppointmentsUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository:IAppointmentRepository
  ) {}

  async execute(providerId:string): Promise<Appointment[]> {
    const appointments = this.appointmentRepository.findProviderAppointments(providerId)

    return appointments
  }
}

export { ListProviderAppointmentsUseCase }
