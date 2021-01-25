import { Router } from 'express'

import ServiceController from '@controllers/serviceController'

const serviceController = new ServiceController()

const routes = Router()

routes.get('/services', serviceController.index)
routes.post('/services', serviceController.create)

export default routes
