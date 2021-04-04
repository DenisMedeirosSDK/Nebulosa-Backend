import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/infra/typeorm/entities/User'

import { IUserRepository } from '../IUserRepository'

class InMemoryUserRepository implements IUserRepository {
  users: User[] = []

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      name,
      email,
      password
    })

    this.users.push(user)

    return user
  }
}
export { InMemoryUserRepository }
