import { Router } from 'express'

import { CreateServiceController } from '@modules/services/useCases/createServices/CreateServiceController'

const createServiceController = new CreateServiceController()

const serviceRoutes = Router()

serviceRoutes.post('/', createServiceController.handle)

export default serviceRoutes
