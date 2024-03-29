import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../infra/typeorm/entities/User'

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}

export { IUserRepository }
