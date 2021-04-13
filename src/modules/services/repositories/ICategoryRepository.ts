import { Category } from '../infra/typeorm/entities/Category'

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<Category>
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
}

export { ICategoryRepository, ICreateCategoryDTO }
