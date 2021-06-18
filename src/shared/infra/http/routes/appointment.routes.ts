import { Router } from 'express'

import { CreateAppointmentController } from '@modules/appointment/useCases/createAppointment/createAppointmentController'
import { ListCustomerAppointmentController } from '@modules/appointment/useCases/listCustomerAppointments/ListCustomerAppointmentController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createAppointmentController = new CreateAppointmentController()
const listCustomerAppointmentController = new ListCustomerAppointmentController()

const appointmentRoutes = Router()

appointmentRoutes.use(ensureAuthenticated)

appointmentRoutes.post('/', createAppointmentController.handle)
appointmentRoutes.get('/', listCustomerAppointmentController.handle)

export default appointmentRoutes
