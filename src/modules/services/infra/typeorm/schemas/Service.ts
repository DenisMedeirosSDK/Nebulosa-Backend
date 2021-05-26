import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('services')
class Service {
  @ObjectIdColumn()
  id?: ObjectID

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  createdAt: Date
}

export { Service }
