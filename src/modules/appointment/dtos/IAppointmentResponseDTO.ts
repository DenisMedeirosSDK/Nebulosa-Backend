import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO'
import { Service } from '@modules/services/infra/typeorm/entities/Service'

interface IAppointmentResponseDTO {
  id?: string
  date: Date
  service: Service
  provider: IUserResponseDTO
}

export { IAppointmentResponseDTO }
