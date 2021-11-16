import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import auth from '@config/auth'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '@shared/errors/AppError'

import { IUserRepository } from '../../repositories/IUserRepository'

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string,
  refreshToken: string
}

interface IRequest {
  email: string
  password: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)
    const {
      secretToken,
      expiresInToken,
      secretRefreshToken,
      expiresInRefreshToken,
      expiresInRefreshTokenDays
    } = auth.jwt

    if (!user) {
      throw new AppError('Email or password incorrect', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401)
    }

    const token = sign({}, secretToken, {
      subject: user.id,
      expiresIn: expiresInToken
    })

    const refreshToken = sign({ email }, secretRefreshToken, {
      subject: user.id,
      expiresIn: expiresInRefreshToken
    })

    const refreshTokenExpiresDate = this.dateProvider.addDays(expiresInRefreshTokenDays)

    await this.userTokenRepository.create({
      userId: user.id,
      refreshToken,
      expiresDate: refreshTokenExpiresDate
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        email: user.email,
        name: user.name
      },
      refreshToken
    }

    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
