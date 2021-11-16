import { inject, injectable } from 'tsyringe'

import { IServiceDTO, IServiceRepository } from '@modules/services/repositories/IServiceRepository'

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) { }

  async execute({ name, description, price, available, duration, categoryId, userId }: IServiceDTO) {
    const convertMinToSec = (duration * 60)
    const service = this.serviceRepository.create({
      name, description, price, available, duration: convertMinToSec, categoryId, userId
    })

    return service
  }
}

export { CreateServiceUseCase }
