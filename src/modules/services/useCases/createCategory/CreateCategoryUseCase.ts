import { inject, injectable } from 'tsyringe'

import { Category } from '@modules/services/infra/typeorm/entities/Category'
import { ICategoryRepository, ICreateCategoryDTO } from '@modules/services/repositories/ICategoryRepository'
import { AppError } from '@shared/errors/AppError'

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) { }

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const checkCategoryAlreadyExists = await this.categoryRepository.findByName(name)

    const nameUpperCase = name.toUpperCase()

    if (checkCategoryAlreadyExists) {
      throw new AppError('Category already exists')
    }
    const category = this.categoryRepository.create({
      name: nameUpperCase, description
    })

    return category
  }
}

export { CreateCategoryUseCase }
