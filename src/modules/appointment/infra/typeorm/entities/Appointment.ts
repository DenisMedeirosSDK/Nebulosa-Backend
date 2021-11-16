import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { User } from '@modules/accounts/infra/typeorm/entities/User'
import { Service } from '@modules/services/infra/typeorm/entities/Service'

@Entity('appointments')
class Appointment {
  @PrimaryColumn()
  id?: string

  @Column()
  date: Date

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'serviceId' })
  service: Service

  @Column()
  serviceId: string

  @Column()
  customerId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'providerId' })
  provider: User

  @Column()
  providerId: string

  @Column()
  status: string

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

export { Appointment }
