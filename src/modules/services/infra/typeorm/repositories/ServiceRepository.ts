import { getMongoRepository, MongoRepository } from 'typeorm'

import { IServiceDTO, IServiceRepository } from '@modules/services/repositories/IServiceRepository'

import { Service } from '../schemas/Service'

class ServiceRepository implements IServiceRepository {
  private repository: MongoRepository<Service>
  constructor() {
    this.repository = getMongoRepository(Service, 'mongo')
  }

  async create({ name, description }: IServiceDTO): Promise<Service> {
    const service = this.repository.create({
      name, description
    })

    this.repository.save(service)

    return service
  }
}

export { ServiceRepository }
