import { Category } from '@modules/services/infra/typeorm/entities/Category'
import { ICategoryRepository, ICreateCategoryDTO } from '@modules/services/repositories/ICategoryRepository'

class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) { }

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.categoryRepository.create({
      name, description
    })

    return category
  }
}

export { CreateCategoryUseCase }
