import { inject, injectable } from 'tsyringe'

import { IServiceResponseDTO } from '@modules/services/dtos/IServiceResponseDTO'
import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'
import { ServiceMap } from '@modules/services/ServiceMap'

interface IRequest {
  categoryId?: string
}

@injectable()
class FindServicesByCategoryUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) {}

  async execute({ categoryId }: IRequest): Promise<IServiceResponseDTO[]> {
    const services = this.serviceRepository.findByCategory(categoryId)

    const service = (await services).map((service) => ServiceMap.toDTO(service))

    return service
  }
}

export { FindServicesByCategoryUseCase }
