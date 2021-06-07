import { ICreateAppointmentDTO } from '../dtos/IAppointmentDTO'
import { Appointment } from '../infra/typeorm/entities/Appointment'

interface IAppointmentRepository {
  create({ serviceId, userId, date }:ICreateAppointmentDTO):Promise<Appointment>
}

export { IAppointmentRepository }
