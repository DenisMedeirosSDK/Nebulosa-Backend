import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO'
import { UserToken } from '../infra/typeorm/entities/UserToken'

interface IUserTokenRepository {
  create({ userId, expiresDate, refreshToken }: ICreateUserTokenDTO): Promise<UserToken>
  findByUserIdAndRefreshToken(userId: string, refreshToken: string): Promise<UserToken>
  delete(id: string): Promise<void>
  findByRefreshToken(refreshToken: string): Promise<UserToken>
}

export { IUserTokenRepository }
