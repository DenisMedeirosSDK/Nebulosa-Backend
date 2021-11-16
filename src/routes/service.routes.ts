import { Router } from 'express'

import { CreateServiceController } from '@modules/services/useCases/createServices/CreateServiceController'
import { FindServicesByCategoryController } from '@modules/services/useCases/findServicesByCategory/FindServicesByCategoryController'
import { ListAllServiceController } from '@modules/services/useCases/listAllServices/ListAllServiceController'
import { ListMyServicesController } from '@modules/services/useCases/listMyServices/listMyServicesController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createServiceController = new CreateServiceController()
const listAllServiceController = new ListAllServiceController()
const findServicesByCategoryController = new FindServicesByCategoryController()
const listMyServicesController = new ListMyServicesController()

const serviceRoutes = Router()

serviceRoutes.use(ensureAuthenticated)

serviceRoutes.post('/', createServiceController.handle)
serviceRoutes.get('/', listAllServiceController.handle)
serviceRoutes.get('/search', findServicesByCategoryController.handle)
serviceRoutes.get('/my', listMyServicesController.handle)

export default serviceRoutes
