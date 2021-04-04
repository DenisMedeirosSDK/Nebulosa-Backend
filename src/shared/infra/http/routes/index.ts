import { Router } from 'express'

import authenticateRoutes from './authenticate.routes'
import categoryRoutes from './category.routes'
import usersRoutes from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/category', categoryRoutes)
routes.use(authenticateRoutes)

export default routes
