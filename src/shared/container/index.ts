import { container } from 'tsyringe'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)
