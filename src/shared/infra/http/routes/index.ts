import { Router } from 'express'

import authenticateRoutes from './authenticate.routes'
import categoryRoutes from './category.routes'
import passwordRoutes from './password.routes'
import usersRoutes from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/category', categoryRoutes)
routes.use('/password', passwordRoutes)
routes.use(authenticateRoutes)

export default routes
