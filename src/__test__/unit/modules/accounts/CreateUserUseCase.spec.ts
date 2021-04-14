import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'

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
    expect(async () => {
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
    }).rejects.toBeInstanceOf(Error)
  })
})
