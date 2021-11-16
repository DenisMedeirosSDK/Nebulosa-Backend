import { inject, injectable } from 'tsyringe'

import { IAppointmentResponseDTO } from '@modules/appointment/dtos/IAppointmentResponseDTO'
import { AppointmentMap } from '@modules/appointment/mapper/AppointmentMap'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

@injectable()
class ListCustomerAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute(customerId: string): Promise<IAppointmentResponseDTO[]> {
    const appointments =
      await this.appointmentRepository.findClientAppointments(customerId)

    const appointment = appointments.map((appointment) =>
      AppointmentMap.toDTO(appointment)
    )
    return appointment
  }
}

export { ListCustomerAppointmentUseCase }
