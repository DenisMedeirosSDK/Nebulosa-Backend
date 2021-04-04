import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

import { User } from '../entities/User'

class UserRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ id, name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id, name, email, password
    })

    await this.repository.save(user)

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email })

    return user
  }
}

export { UserRepository }
