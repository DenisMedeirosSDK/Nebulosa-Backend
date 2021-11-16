import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import auth from '@config/auth'
import { AppError } from '@shared/errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {
  const authHeader = request.headers.authorization
  const { secretRefreshToken } = auth.jwt

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, secretRefreshToken) as IPayload

    request.user = {
      id: userId
    }

    next()
  } catch (error) {
    throw new AppError('Invalid token!', 401)
  }
}
