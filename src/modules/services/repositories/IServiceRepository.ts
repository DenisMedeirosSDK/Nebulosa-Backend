import { Service } from '../infra/typeorm/entities/Service'

interface IServiceDTO {
  name: string
  description: string
  price: number
  available: boolean
  duration: number
  categoryId:string
  userId: string
}

interface IServiceRepository {
  create({ name, description, price, available, duration, categoryId, userId }: IServiceDTO): Promise<Service>
}

export { IServiceRepository, IServiceDTO }
