import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { AppError } from '@shared/errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, 'secretKey') as IPayload

    const usersRepository = new UserRepository()
    const user = await usersRepository.findById(userId)

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    request.user = {
      id: userId
    }

    next()
  } catch (error) {
    throw new AppError('Invalid token!', 401)
  }
}
