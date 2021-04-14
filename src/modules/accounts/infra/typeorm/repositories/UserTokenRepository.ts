import { getRepository, Repository } from 'typeorm'

import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO'
import { IUserTokenRepository } from '@modules/accounts/repositories/IUserTokenRepository'

import { UserToken } from '../entities/UserToken'

class UserTokenRepository implements IUserTokenRepository {
  private repository: Repository<UserToken>
  constructor() {
    this.repository = getRepository(UserToken)
  }

  async create({ userId, expiresDate, refreshToken }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken = this.repository.create({
      expiresDate,
      refreshToken,
      userId
    })

    await this.repository.save(userToken)

    return userToken
  }

  async findByUserIdAndRefreshToken(userId: string, refreshToken: string): Promise<UserToken> {
    const userToken = await this.repository.findOne({
      userId,
      refreshToken
    })

    return userToken
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async findByRefreshToken(refreshToken: string): Promise<UserToken> {
    const userToken = await this.repository.findOne({ refreshToken })

    return userToken
  }
}

export { UserTokenRepository }
