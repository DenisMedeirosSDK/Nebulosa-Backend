import { Router } from 'express'

import appointmentRoutes from './appointment.routes'
import authenticateRoutes from './authenticate.routes'
import categoryRoutes from './category.routes'
import passwordRoutes from './password.routes'
import serviceRoutes from './service.routes'
import usersRoutes from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/category', categoryRoutes)
routes.use('/services', serviceRoutes)
routes.use('/appointments', appointmentRoutes)
routes.use('/password', passwordRoutes)
routes.use(authenticateRoutes)

export default routes
