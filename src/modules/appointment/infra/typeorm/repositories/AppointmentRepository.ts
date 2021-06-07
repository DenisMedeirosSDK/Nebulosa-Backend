import { getRepository, Repository } from 'typeorm'

import { ICreateAppointmentDTO } from '@modules/appointment/dtos/IAppointmentDTO'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'

import { Appointment } from '../entities/Appointment'

class AppointmentRepository implements IAppointmentRepository {
  private repository: Repository<Appointment>
  constructor() {
    this.repository = getRepository(Appointment)
  }

  async create({ serviceId, userId, date }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.repository.create({ serviceId, userId, date })

    await this.repository.save(appointment)

    return appointment
  }
}
export { AppointmentRepository }
