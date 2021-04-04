import { Category } from '@modules/services/infra/typeorm/entities/Category'

import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository'

class InMemoryCategoryRepository implements ICategoryRepository {
  categories: Category[] = []
  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category()

    Object.assign(category, {
      name, description
    })

    this.categories.push(category)

    return category
  }
}

export { InMemoryCategoryRepository }
