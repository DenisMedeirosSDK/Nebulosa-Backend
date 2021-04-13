import { v4 as uuidV4 } from 'uuid'

import { User } from './User'

class UserToken {
  id?: string

  refreshToken: string

  userId: string

  user: User

  expiresDate: number

  createdAt: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
    if (!this.expiresDate) {
      this.expiresDate = Date.now()
    }
    if (!this.createdAt) {
      this.createdAt = Date.now()
    }
  }
}
export { UserToken }
