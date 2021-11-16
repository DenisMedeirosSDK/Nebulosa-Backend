import { inject, injectable } from 'tsyringe'

import { Category } from '@modules/services/infra/typeorm/entities/Category'
import { ICategoryRepository } from '@modules/services/repositories/ICategoryRepository'

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) { }

  async execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list()

    return categories
  }
}

export { ListCategoriesUseCase }
