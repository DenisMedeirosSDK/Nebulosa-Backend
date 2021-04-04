import { getRepository, Repository } from 'typeorm'

import { ICategoryRepository, ICreateCategoryDTO } from '@modules/services/repositories/ICategoryRepository'

import { Category } from '../entities/Category'

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>
  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name, description
    })

    await this.repository.save(category)

    return category
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name })

    return category
  }
}

export { CategoryRepository }
