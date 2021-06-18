import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListClientAppointmentUseCase } from './ListClientAppointmentUseCase'

class ListClientAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id

    const listAppointmentUseCase = container.resolve(ListClientAppointmentUseCase)

    const appointments = await listAppointmentUseCase.execute(userId)

    return response.json(appointments)
  }
}

export { ListClientAppointmentController }
