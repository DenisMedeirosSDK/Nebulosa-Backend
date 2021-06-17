import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindServicesByCategoryUseCase } from './FindServicesByCategoryUseCase'

class FindServicesByCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.query

    const findServicesByCategoryUseCase = container.resolve(FindServicesByCategoryUseCase)

    const services = await findServicesByCategoryUseCase.execute({ categoryId: categoryId as string })

    return response.json(services)
  }
}

export { FindServicesByCategoryController }
