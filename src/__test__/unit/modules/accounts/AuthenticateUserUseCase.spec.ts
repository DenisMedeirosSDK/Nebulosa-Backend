import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { InMemoryUserTokenRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserTokenRepository'
import { AuthenticateUserUseCase } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { DateDaysJSProvider } from '@shared/container/providers/DateProvider/implementations/DateDaysJSProvider'
import { AppError } from '@shared/errors/AppError'

let inMemoryUseRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase
let authenticateUserUseCase: AuthenticateUserUseCase
let inMemoryUserTokenRepository: InMemoryUserTokenRepository
let dateDaysJSProvider: DateDaysJSProvider

describe('Authenticate UseCase', () => {
  beforeEach(() => {
    inMemoryUseRepository = new InMemoryUserRepository()
    inMemoryUserTokenRepository = new InMemoryUserTokenRepository()
    dateDaysJSProvider = new DateDaysJSProvider()
    createUserUseCase = new CreateUserUseCase(inMemoryUseRepository)
    authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUseRepository, inMemoryUserTokenRepository, dateDaysJSProvider)
  })
  it('should be able create a new auth', async () => {
    const user: ICreateUserDTO = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456'
    }
    await createUserUseCase.execute(user)

    const token = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(token).toHaveProperty('token')
  })
  it('should not be able to authenticate an nonexistent user', async () => {
    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'nonexist@email.com',
        password: 'non-existPassword'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it('should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456'
    }

    await createUserUseCase.execute(user)

    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrect-password'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it('should not be able to authenticate with incorrect email', async () => {
    const user: ICreateUserDTO = {
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456'
    }

    await createUserUseCase.execute(user)

    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'incorrect-email',
        password: user.password
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
