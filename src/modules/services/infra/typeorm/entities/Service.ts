
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { User } from '@modules/accounts/infra/typeorm/entities/User'

import { Category } from '../entities/Category'

@Entity('services')
class Service {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  available: boolean

  @Column()
  duration: number

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  @Column()
  categoryId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @Column()
  userId: string

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

export { Service }
