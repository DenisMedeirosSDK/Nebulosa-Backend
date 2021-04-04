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
  phone?: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isProvider: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }
