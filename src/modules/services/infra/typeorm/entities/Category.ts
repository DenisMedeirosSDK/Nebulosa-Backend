import { v4 as uuidV4 } from 'uuid'

class Category {
  id?: string

  name: string

  description: string

  createdAt: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    if (!this.createdAt) {
      this.createdAt = Date.now()
    }
  }
}

export { Category }
