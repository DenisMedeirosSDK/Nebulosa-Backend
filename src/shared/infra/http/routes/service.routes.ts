import { Router } from 'express'

import { CreateServiceController } from '@modules/services/useCases/createServices/CreateServiceController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createServiceController = new CreateServiceController()

const serviceRoutes = Router()

serviceRoutes.use(ensureAuthenticated)

serviceRoutes.post('/', createServiceController.handle)

export default serviceRoutes
