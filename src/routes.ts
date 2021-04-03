import { Router } from 'express'

import ConnectionsController from '@controllers/ConnectionsController'
import ServiceController from '@controllers/serviceController'

const serviceController = new ServiceController()
const connectionsController = new ConnectionsController()

const routes = Router()

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

routes.get('/services', serviceController.index)
routes.post('/services', serviceController.create)

export default routes
