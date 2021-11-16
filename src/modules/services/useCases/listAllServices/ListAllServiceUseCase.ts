import { inject, injectable } from 'tsyringe'

import { Service } from '@modules/services/infra/typeorm/entities/Service'
import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'

@injectable()
class ListAllServiceUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) {}

  async execute(): Promise<Service[]> {
    const services = this.serviceRepository.findAll()

    return services
  }
}

export { ListAllServiceUseCase }
