import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { CreateUseUserCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'

let InMemoryUseRepository: InMemoryUserRepository
let createUseUserCase: CreateUseUserCase

describe('Create user', () => {
  beforeEach(() => {
    InMemoryUseRepository = new InMemoryUserRepository()
    createUseUserCase = new CreateUseUserCase(InMemoryUseRepository)
  })
  it('should be able create a new user', async () => {
    const user = await createUseUserCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456'
    })
    expect(user).toHaveProperty('id')
  })
  it('should not be able create a new user with email exists', async () => {
    expect(async () => {
      await createUseUserCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })

      await createUseUserCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
