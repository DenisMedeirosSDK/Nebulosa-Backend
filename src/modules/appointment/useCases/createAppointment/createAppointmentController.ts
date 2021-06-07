import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateAppointmentUseCase } from './createAppointmentUseCase'

class CreateAppointmentController {
  async handle(request: Request, response: Response):Promise<Response> {
    const userId = request.user.id
    const { date, serviceId } = request.body

    const createAppointmentUseCase = container.resolve(CreateAppointmentUseCase)

    const appointment = await createAppointmentUseCase.execute({
      date, serviceId, userId
    })

    return response.json(appointment)
  }
}
export { CreateAppointmentController }
