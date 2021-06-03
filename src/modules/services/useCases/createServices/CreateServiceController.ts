import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateServiceUseCase } from './CreateServiceUseCase'

class CreateServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id
    const { name, description, price, available, duration, categoryId } = request.body

    const createServiceUseCase = container.resolve(CreateServiceUseCase)

    const service = await createServiceUseCase.execute({
      name,
      description,
      price,
      available,
      duration,
      categoryId,
      userId
    })

    return response.status(201).json(service)
  }
}
export { CreateServiceController }
