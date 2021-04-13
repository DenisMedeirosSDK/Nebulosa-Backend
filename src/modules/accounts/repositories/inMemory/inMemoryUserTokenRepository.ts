import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO'
import { UserToken } from '@modules/accounts/infra/typeorm/entities/UserToken'

import { IUserTokenRepository } from '../IUserTokenRepository'

class inMemoryUserTokenRepository implements IUserTokenRepository {
  private usersTokens: UserToken[] = []
  async create({ userId, expiresDate, refreshToken }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken = new UserToken()

    Object.assign(userToken, {
      userId, expiresDate, refreshToken
    })

    this.usersTokens.push(userToken)

    return userToken
  }

  async findByUserIdAndRefreshToken(userId: string, refreshToken: string): Promise<UserToken> {
    const userToken = this.usersTokens.find(
      userToken => userToken.userId === userId &&
        userToken.refreshToken === refreshToken)

    return userToken
  }

  async delete(id: string): Promise<void> {
    const userToken = this.usersTokens.find(userToken => userToken.id === id)
    this.usersTokens.splice(this.usersTokens.indexOf(userToken))
  }

  async findByRefreshToken(refreshToken: string): Promise<UserToken> {
    const userToken = this.usersTokens.find(userToken => userToken.refreshToken === refreshToken)

    return userToken
  }
}

export { inMemoryUserTokenRepository }
