import { inject, injectable } from 'tsyringe'

import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'

@injectable()
class ListMyServicesUseCase {
  constructor(
    @inject('ServiceRepository')
    private serviceRepository: IServiceRepository
  ) { }

  async execute(userId:string) {
    const services = this.serviceRepository.listMyServices(userId)

    return services
  }
}

export { ListMyServicesUseCase }
