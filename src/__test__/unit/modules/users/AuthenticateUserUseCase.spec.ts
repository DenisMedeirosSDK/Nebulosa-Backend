import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { AuthenticateUserUseCase } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { AppError } from '@shared/errors/AppError'

let InMemoryUseRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase
let authenticateUserUseCase: AuthenticateUserUseCase

describe('Authenticate UseCases', () => {
  beforeEach(() => {
    InMemoryUseRepository = new InMemoryUserRepository()
    createUserUseCase = new CreateUserUseCase(InMemoryUseRepository)
    authenticateUserUseCase = new AuthenticateUserUseCase(InMemoryUseRepository)
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
  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'nonexist@email.com',
        password: 'non-existPassword'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it('should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123456'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'ErrorPassword'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
