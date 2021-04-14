import { container } from 'tsyringe'

import '@shared/container/providers'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { UserTokenRepository } from '@modules/accounts/infra/typeorm/repositories/UserTokenRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
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

container.registerSingleton<IUserTokenRepository>(
  'UserTokenRepository',
  UserTokenRepository
)
