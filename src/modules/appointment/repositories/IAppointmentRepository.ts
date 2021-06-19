import { ICreateAppointmentDTO } from '../dtos/IAppointmentDTO'
import { Appointment } from '../infra/typeorm/entities/Appointment'

interface IAppointmentRepository {
  create({ serviceId, customerId, providerId, date, status }:ICreateAppointmentDTO):Promise<Appointment>
  findById(appointmentId:string):Promise<Appointment>
  findClientAppointments(userId:string):Promise<Appointment[]>
}

export { IAppointmentRepository }
