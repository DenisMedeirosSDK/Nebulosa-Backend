import { Category } from '@modules/services/infra/typeorm/entities/Category'
import { ICategoryRepository, ICreateCategoryDTO } from '@modules/services/repositories/ICategoryRepository'
import { AppError } from '@shared/errors/AppError'

class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository
  ) { }

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const checkCategoryAlreadyExists = this.categoryRepository.findByName(name)

    if (checkCategoryAlreadyExists) {
      throw new AppError('Category already exists')
    }
    const category = this.categoryRepository.create({
      name, description
    })

    return category
  }
}

export { CreateCategoryUseCase }
