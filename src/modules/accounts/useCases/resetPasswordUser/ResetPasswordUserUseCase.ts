import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '@modules/accounts/repositories/IUserRepository'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '@shared/errors/AppError'

interface IRequest {
  token: string,
  password: string
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ token, password }: IRequest) {
    const userToken = await this.userTokenRepository.findByRefreshToken(token)

    if (!userToken) {
      throw new AppError('Token invalid!')
    }

    if (this.dateProvider.compareIfBefore(userToken.expiresDate, this.dateProvider.dateNow())) {
      throw new AppError('Token expired')
    }

    const user = await this.userRepository.findById(userToken.userId)

    user.password = await hash(password, 8)

    await this.userRepository.create(user)

    await this.userTokenRepository.delete(userToken.id)
  }
}

export { ResetPasswordUserUseCase }
