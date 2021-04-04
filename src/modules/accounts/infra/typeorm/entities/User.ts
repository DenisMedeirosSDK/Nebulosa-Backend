import { v4 as uuidV4 } from 'uuid'

class User {
  id?: string

  name: string

  avatar?: string

  phone?: string

  email: string

  password: string

  isProvider: boolean

  createdAt: number

  updatedAt: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    if (!this.isProvider) {
      this.isProvider = false
    }
    if (this.createdAt) {
      this.createdAt = Date.now()
    }
    if (this.updatedAt) {
      this.updatedAt = Date.now()
    }
  }
}

export { User }
