import { container } from 'tsyringe'

import '@shared/container/providers'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { UserTokenRepository } from '@modules/accounts/infra/typeorm/repositories/UserTokenRepository'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
import { AppointmentRepository } from '@modules/appointment/infra/typeorm/repositories/AppointmentRepository'
import { IAppointmentRepository } from '@modules/appointment/repositories/IAppointmentRepository'
import { CategoryRepository } from '@modules/services/infra/typeorm/repositories/CategoryRepository'
import { ServiceRepository } from '@modules/services/infra/typeorm/repositories/ServiceRepository'
import { ICategoryRepository } from '@modules/services/repositories/ICategoryRepository'
import { IServiceRepository } from '@modules/services/repositories/IServiceRepository'

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

container.registerSingleton<IServiceRepository>(
  'ServiceRepository',
  ServiceRepository
)

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository
)
