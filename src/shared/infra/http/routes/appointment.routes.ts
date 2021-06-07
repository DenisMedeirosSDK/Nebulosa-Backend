import { Router } from 'express'

import { CreateAppointmentController } from '@modules/appointment/useCases/createAppointment/createAppointmentController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createAppointmentController = new CreateAppointmentController()

const appointmentRoutes = Router()

appointmentRoutes.use(ensureAuthenticated)

appointmentRoutes.post('/', createAppointmentController.handle)

export default appointmentRoutes
