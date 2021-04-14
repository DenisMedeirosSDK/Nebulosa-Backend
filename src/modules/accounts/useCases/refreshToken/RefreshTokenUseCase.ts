import { sign, verify } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import auth from '@config/auth'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '@shared/errors/AppError'

interface IPayload {
  sub: string
  email: string
}

interface ITokenResponse {
  token: string
  refreshToken: string
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider
  ) { }

  async execute(token: string): Promise<ITokenResponse> {
    const { secretToken, secretRefreshToken, expiresInToken, expiresInRefreshToken, expiresInRefreshTokenDays } = auth.jwt

    const { email, sub } = verify(token, secretRefreshToken) as IPayload

    const userId = sub

    const userToken = await this.userTokenRepository.findByUserIdAndRefreshToken(userId, token)

    if (!userToken) {
      throw new AppError('Refresh token does not exists')
    }

    const refreshToken = sign({ email }, secretRefreshToken, {
      subject: sub,
      expiresIn: expiresInRefreshToken
    })

    const expiresDate = this.dateProvider.addDays(expiresInRefreshTokenDays)

    await this.userTokenRepository.create({
      userId,
      expiresDate,
      refreshToken
    })

    const newToken = sign({}, secretToken, {
      subject: userId,
      expiresIn: expiresInToken
    })

    return {
      refreshToken,
      token: newToken
    }
  }
}

export { RefreshTokenUseCase }
