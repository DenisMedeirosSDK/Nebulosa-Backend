import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { AppError } from '@shared/errors/AppError'

let InMemoryUseRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase

describe('Create user', () => {
  beforeEach(() => {
    InMemoryUseRepository = new InMemoryUserRepository()
    createUserUseCase = new CreateUserUseCase(InMemoryUseRepository)
  })
  it('should be able create a new user', async () => {
    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456'
    })
    expect(user).toHaveProperty('id')
  })
  it('should not be able create a new user with email exists', async () => {
    await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456'
    })

    await expect(async () => {
      await createUserUseCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it('should not be able create a new user if user exits', async () => {
    await expect(async () => {
      await createUserUseCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })
      await createUserUseCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
