import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { InMemoryUserTokenRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserTokenRepository'
import { AuthenticateUserUseCase } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { RefreshTokenUseCase } from '@modules/accounts/useCases/refreshToken/RefreshTokenUseCase'
import { DateDaysJSProvider } from '@shared/container/providers/DateProvider/implementations/DateDaysJSProvider'

let inMemoryUseRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase
let authenticateUserUseCase: AuthenticateUserUseCase
let inMemoryUserTokenRepository: InMemoryUserTokenRepository
let dateDaysJSProvider: DateDaysJSProvider
let refreshTokenUseCase: RefreshTokenUseCase

describe('Refresh Token Use Case', () => {
  beforeEach(() => {
    inMemoryUseRepository = new InMemoryUserRepository()
    inMemoryUserTokenRepository = new InMemoryUserTokenRepository()
    dateDaysJSProvider = new DateDaysJSProvider()
    createUserUseCase = new CreateUserUseCase(inMemoryUseRepository)
    authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUseRepository, inMemoryUserTokenRepository, dateDaysJSProvider)
    refreshTokenUseCase = new RefreshTokenUseCase(inMemoryUserTokenRepository, dateDaysJSProvider)
  })
  it('should be able create a new refresh token', async () => {
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

    const refreshToken = await refreshTokenUseCase.execute(token.refreshToken)
    expect(refreshToken).toHaveProperty('token')
  })
})
