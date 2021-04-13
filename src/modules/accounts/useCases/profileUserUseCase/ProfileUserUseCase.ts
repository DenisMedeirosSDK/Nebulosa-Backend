import { inject, injectable } from 'tsyringe'

import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO'
import { UserMap } from '@modules/accounts/mapper/UserMap'
import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.userRepository.findById(id)

    return UserMap.toDTO(user)
  }
}

export { ProfileUserUseCase }
