import { Router } from 'express'

import { CreateAppointmentController } from '@modules/appointment/useCases/createAppointment/createAppointmentController'
import { ListClientAppointmentController } from '@modules/appointment/useCases/listClientAppointments/ListClientAppointmentController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createAppointmentController = new CreateAppointmentController()
const listClientAppointmentController = new ListClientAppointmentController()

const appointmentRoutes = Router()

appointmentRoutes.use(ensureAuthenticated)

appointmentRoutes.post('/', createAppointmentController.handle)
appointmentRoutes.get('/', listClientAppointmentController.handle)

export default appointmentRoutes
