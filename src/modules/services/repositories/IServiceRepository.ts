import { Service } from '../infra/typeorm/schemas/Service'

interface IServiceDTO {
  name: string
  description: string
}

interface IServiceRepository {
  create({ name, description }: IServiceDTO): Promise<Service>
}

export { IServiceRepository, IServiceDTO }
