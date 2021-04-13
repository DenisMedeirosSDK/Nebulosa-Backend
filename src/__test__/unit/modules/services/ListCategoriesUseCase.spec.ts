import { InMemoryCategoryRepository } from '@modules/services/repositories/inMemory/InMemoryCategoryRepository'
import { CreateCategoryUseCase } from '@modules/services/useCases/createCategory/CreateCategoryUseCase'
import { ListCategoriesUseCase } from '@modules/services/useCases/listCategories/ListCategoriesUseCase'

let inMemoryCategoryRepository: InMemoryCategoryRepository
let listCategoriesUseCase: ListCategoriesUseCase
let createCategoryUseCase: CreateCategoryUseCase

describe('List Categories UseCase', () => {
  beforeEach(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository()
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
    listCategoriesUseCase = new ListCategoriesUseCase(inMemoryCategoryRepository)
  })
  it('Should be able list categories', async () => {
    await createCategoryUseCase.execute({
      name: 'HAND-NAILS',
      description: 'Category for hands'
    })

    await createCategoryUseCase.execute({
      name: 'FOOT-NAILS',
      description: 'Category for hands'
    })

    const categories = await listCategoriesUseCase.execute()

    expect(categories).toHaveLength(2)
  })
})
