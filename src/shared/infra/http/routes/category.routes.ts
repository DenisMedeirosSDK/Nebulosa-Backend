import { Router } from 'express'

import { CreateCategoryController } from '@modules/services/useCases/createCategory/CreateCategoryController'
import { ListCategoriesController } from '@modules/services/useCases/listCategories/ListCategoriesController'

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoriesController.handle)

export default categoryRoutes
