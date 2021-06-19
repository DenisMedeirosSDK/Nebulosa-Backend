import { inject, injectable } from 'tsyringe'

import { Appointment } from '@modules/appointment/infra/typeorm/entities/Appointment'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

@injectable()
class ListCustomerAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository:IAppointmentRepository
  ) {}

  async execute(customerId:string): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.findClientAppointments(customerId)

    return appointments
  }
}

export { ListCustomerAppointmentUseCase }
