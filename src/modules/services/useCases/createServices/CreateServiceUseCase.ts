import { inject, injectable } from 'tsyringe'

import { IServiceDTO, IServiceRepository } from '@modules/services/repositories/IServiceRepository'

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) { }

  async execute({ name, description }: IServiceDTO) {
    const service = this.serviceRepository.create({
      name, description
    })

    return service
  }
}

export { CreateServiceUseCase }
