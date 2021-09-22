import { getRepository, Repository } from 'typeorm'

import {
  IServiceDTO,
  IServiceRepository
} from '@modules/services/repositories/IServiceRepository'

import { Service } from '../entities/Service'

class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>
  constructor() {
    this.repository = getRepository(Service)
  }

  async listMyServices(userId: string): Promise<Service[]> {
    const services = this.repository.find({
      where: { userId }
    })

    return services
  }

  async findByCategory(categoryId?: string): Promise<Service[]> {
    const services = this.repository.find({
      where: { categoryId },
      relations: ['user']
    })

    return services
  }

  async findAll(): Promise<Service[]> {
    const services = this.repository.find()

    return services
  }

  async findById(serviceId: string): Promise<Service> {
    const service = this.repository.findOne(serviceId)

    return service
  }

  async create({
    name,
    description,
    price,
    available,
    duration,
    categoryId,
    userId
  }: IServiceDTO): Promise<Service> {
    const service = this.repository.create({
      name,
      description,
      price,
      available,
      duration,
      categoryId,
      userId
    })

    await this.repository.save(service)

    return service
  }
}

export { ServiceRepository }
