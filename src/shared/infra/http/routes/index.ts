import { Router } from 'express'

import authenticateRoutes from './authenticate.routes'
import usersRoutes from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use(authenticateRoutes)

export default routes
