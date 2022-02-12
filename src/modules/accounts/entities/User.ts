import { Expose } from 'class-transformer'

class User {
  id?: string

  name: string

  avatar?: string

  email: string

  password: string

  role: string

  createdAt: Date

  updatedAt: Date

  @Expose({ name: 'avatarURL' })
  avatarURL(): string {
    switch (process.env.DISK || 'local') {
      case 'local':
        return `${process.env.APP_API_URL}/avatar/${this.avatar}`
      default:
        return null
    }
  }
}

export { User }
