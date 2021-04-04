import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUseUserCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUseUserCase = container.resolve(CreateUseUserCase)

    const user = await createUseUserCase.execute({ name, email, password })

    return response.status(201).json(user)
  }
}
export { CreateUserController }
