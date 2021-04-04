import { Router } from 'express'

import { CreateCategoryController } from '@modules/services/useCases/createCategory/CreateCategoryController'

const createCategoryController = new CreateCategoryController()

const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController.handle)

export default categoryRoutes
