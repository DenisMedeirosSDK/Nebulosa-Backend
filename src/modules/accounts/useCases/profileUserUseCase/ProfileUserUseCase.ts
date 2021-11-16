import { inject, injectable } from 'tsyringe'

import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO'
import { UserMap } from '@modules/accounts/mapper/UserMap'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exists!')
    }

    return UserMap.toDTO(user)
  }
}

export { ProfileUserUseCase }
