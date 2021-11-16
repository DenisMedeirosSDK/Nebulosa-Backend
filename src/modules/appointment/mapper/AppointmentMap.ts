import { classToClass } from 'class-transformer'

import { IAppointmentResponseDTO } from '../dtos/IAppointmentResponseDTO'
import { Appointment } from '../infra/typeorm/entities/Appointment'

class AppointmentMap {
  static toDTO({
    id,
    date,
    service,
    provider: { id: userId, name: userName, email, avatar, role, avatarURL },
    status
  }: Appointment): IAppointmentResponseDTO {
    const appointment = classToClass({
      id,
      date,
      service,
      status,
      provider: {
        id: userId,
        name: userName,
        email,
        avatar,
        role,
        avatarURL
      }
    })

    return appointment
  }
}

export { AppointmentMap }
