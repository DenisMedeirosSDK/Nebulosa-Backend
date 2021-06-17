import { Router } from 'express'

import { CreateServiceController } from '@modules/services/useCases/createServices/CreateServiceController'
import { FindServicesByCategoryController } from '@modules/services/useCases/findServicesByCategory/FindServicesByCategoryController'
import { ListAllServiceController } from '@modules/services/useCases/listAllServices/ListAllServiceController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createServiceController = new CreateServiceController()
const listAllServiceController = new ListAllServiceController()
const findServicesByCategoryController = new FindServicesByCategoryController()

const serviceRoutes = Router()

serviceRoutes.use(ensureAuthenticated)

serviceRoutes.post('/', createServiceController.handle)
serviceRoutes.get('/', listAllServiceController.handle)
serviceRoutes.get('/search', findServicesByCategoryController.handle)

export default serviceRoutes
