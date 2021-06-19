import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListProviderAppointmentsUseCase } from './ListProviderAppointmentsUseCase'

class ListProviderAppointmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id

    const listProviderAppointmentsUseCase = container.resolve(ListProviderAppointmentsUseCase)

    const appointments = await listProviderAppointmentsUseCase.execute(userId)

    return response.json(appointments)
  }
}

export { ListProviderAppointmentsController }
