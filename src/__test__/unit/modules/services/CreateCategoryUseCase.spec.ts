import { InMemoryCategoryRepository } from '@modules/services/repositories/inMemory/InMemoryCategoryRepository'
import { CreateCategoryUseCase } from '@modules/services/useCases/createCategory/CreateCategoryUseCase'

let inMemoryCategoryRepository: InMemoryCategoryRepository
let createCategoryUseCase: CreateCategoryUseCase

describe('Category useCase', () => {
  beforeEach(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository()
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
  })
  it('should be able an create new category', async () => {
    const category = await createCategoryUseCase.execute({
      name: 'HAND-NAILS',
      description: 'Category for hands'
    })

    expect(category).toHaveProperty('id')
  })
})
