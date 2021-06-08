import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllServiceUseCase } from './ListAllServiceUseCase'

class ListAllServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllServiceUseCase = container.resolve(ListAllServiceUseCase)

    const services = await listAllServiceUseCase.execute()

    return response.json(services)
  }
}

export { ListAllServiceController }
