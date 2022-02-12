import { ICreateAppointmentDTO } from '../dtos/IAppointmentDTO'
import { Appointment } from '../infra/typeorm/entities/Appointment'

interface IAppointmentRepository {
  create({
    serviceId,
    customerId,
    providerId,
    date,
    status
  }: ICreateAppointmentDTO): Promise<Appointment>
  findById(appointmentId: string): Promise<Appointment>
  findClientAppointments(userId: string): Promise<Appointment[]>
  findProviderAppointments(providerId: string): Promise<Appointment[]>
  findByDate(date: Date, providerId: string): Promise<Appointment | undefined>
}

export { IAppointmentRepository }
