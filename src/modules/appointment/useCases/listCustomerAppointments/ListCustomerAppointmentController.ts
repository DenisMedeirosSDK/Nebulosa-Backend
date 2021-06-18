import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListCustomerAppointmentUseCase } from './ListCustomerAppointmentUseCase'

class ListCustomerAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id

    const listAppointmentUseCase = container.resolve(ListCustomerAppointmentUseCase)

    const appointments = await listAppointmentUseCase.execute(userId)

    return response.json(appointments)
  }
}

export { ListCustomerAppointmentController }
