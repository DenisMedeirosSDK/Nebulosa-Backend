import { Expose } from 'class-transformer'
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  avatar?: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  role: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
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

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }
