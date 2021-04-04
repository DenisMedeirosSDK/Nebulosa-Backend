import { container } from 'tsyringe'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { CategoryRepository } from '@modules/services/infra/typeorm/repositories/CategoryRepository'
import { ICategoryRepository } from '@modules/services/repositories/ICategoryRepository'

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
)
