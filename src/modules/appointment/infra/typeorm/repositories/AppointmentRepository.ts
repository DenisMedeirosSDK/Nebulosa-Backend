import { getRepository, Repository } from 'typeorm'

import { ICreateAppointmentDTO } from '@modules/appointment/dtos/IAppointmentDTO'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

import { Appointment } from '../entities/Appointment'

class AppointmentRepository implements IAppointmentRepository {
  private repository: Repository<Appointment>
  constructor() {
    this.repository = getRepository(Appointment)
  }

  async findByDate(date: Date, providerId: string): Promise<Appointment> {
    const appointment = await this.repository.findOne({
      where: { date, providerId }
    })

    return appointment
  }

  async findProviderAppointments(providerId: string): Promise<Appointment[]> {
    const appointments = this.repository.find({
      where: { providerId },
      relations: ['service']
    })

    return appointments
  }

  async findById(appointmentId: string): Promise<Appointment> {
    const appointment = this.repository.findOne(appointmentId)

    return appointment
  }

  async findClientAppointments(customerId: string): Promise<Appointment[]> {
    const appointments = this.repository.find({
      where: { customerId },
      relations: ['service', 'provider']
    })

    return appointments
  }

  async create({
    serviceId,
    customerId,
    providerId,
    date,
    status
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.repository.create({
      serviceId,
      customerId,
      providerId,
      date,
      status
    })

    await this.repository.save(appointment)

    return appointment
  }
}

export { AppointmentRepository }
