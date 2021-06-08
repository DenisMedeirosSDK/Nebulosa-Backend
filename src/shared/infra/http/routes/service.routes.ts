import { Router } from 'express'

import { CreateServiceController } from '@modules/services/useCases/createServices/CreateServiceController'
import { ListAllServiceController } from '@modules/services/useCases/listAllServices/ListAllServiceController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createServiceController = new CreateServiceController()
const listAllServiceController = new ListAllServiceController()

const serviceRoutes = Router()

serviceRoutes.use(ensureAuthenticated)

serviceRoutes.post('/', createServiceController.handle)
serviceRoutes.get('/', listAllServiceController.handle)

export default serviceRoutes
