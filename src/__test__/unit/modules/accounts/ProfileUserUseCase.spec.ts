import { InMemoryUserRepository } from '@modules/accounts/repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { ProfileUserUseCase } from '@modules/accounts/useCases/profileUserUseCase/ProfileUserUseCase'
import { AppError } from '@shared/errors/AppError'

let inMemoryUserRepository: InMemoryUserRepository
let createUserUseCase: CreateUserUseCase
let profileUserUseCase: ProfileUserUseCase

describe('Show Profile', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    profileUserUseCase = new ProfileUserUseCase(inMemoryUserRepository)
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })
  it('should be able show the profile', async () => {
    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456'
    })
    const profile = await profileUserUseCase.execute(user.id)

    expect(profile.name).toBe('John Doe')
    expect(profile.email).toBe('johndoe@email.com')
  })
  it('should not be able show profile from non existing user', async () => {
    const userId = 'userId-no-exists'
    await expect(async () => {
      await profileUserUseCase.execute(userId)
    }
    ).rejects.toBeInstanceOf(AppError)
  })
})
