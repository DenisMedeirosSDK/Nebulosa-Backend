import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

import { User } from '../../../entities/User'
import { UserMongo } from '../schemas/User'

export class UserMongoRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const user = await UserMongo.create(data)

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = UserMongo.findOne({
      email
    })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = UserMongo.findById(id)

    return user
  }
}
