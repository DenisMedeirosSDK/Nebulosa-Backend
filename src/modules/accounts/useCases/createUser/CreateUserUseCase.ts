import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/infra/typeorm/entities/User'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

@injectable()
class CreateUseUserCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const checkUserAlreadyExists = await this.userRepository.findByEmail(email)

    if (checkUserAlreadyExists) {
      throw new Error('User Already exists')
    }

    const hashPassword = await hash(password, 8)

    const user = await this.userRepository.create({
      name,
      email,
      password: hashPassword
    })

    return user
  }
}

export { CreateUseUserCase }
