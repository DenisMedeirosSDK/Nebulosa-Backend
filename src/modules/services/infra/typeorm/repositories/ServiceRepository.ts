import { getRepository, Repository } from 'typeorm'

import { IServiceDTO, IServiceRepository } from '@modules/services/repositories/IServiceRepository'

import { Service } from '../entities/Service'

class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>
  constructor() {
    this.repository = getRepository(Service)
  }

  async create({ name, description, price, available, duration, categoryId, userId }: IServiceDTO): Promise<Service> {
    const service = this.repository.create({
      name, description, price, available, duration, categoryId, userId
    })

    await this.repository.save(service)

    return service
  }
}

export { ServiceRepository }
