import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListMyServicesUseCase } from './listMyServicesUseCase'

class ListMyServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id

    const listMyServicesUseCase = container.resolve(ListMyServicesUseCase)

    const services = await listMyServicesUseCase.execute(userId)

    return response.json(services)
  }
}

export { ListMyServicesController }
