import { inject, injectable } from 'tsyringe'

import { Service } from '@modules/services/infra/typeorm/entities/Service'
import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'

interface IRequest {
  categoryId?:string
}

@injectable()
class FindServicesByCategoryUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) { }

  async execute({ categoryId }:IRequest): Promise<Service[]> {
    const services = this.serviceRepository.findByCategory(categoryId)

    return services
  }
}

export { FindServicesByCategoryUseCase }
