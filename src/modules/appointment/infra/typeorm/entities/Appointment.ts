
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

import { Service } from '@modules/services/infra/typeorm/entities/Service'

@Entity('appointments')
class Appointment {
  @PrimaryColumn()
  id?:string

  @Column()
  date:Date

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'serviceId' })
  service:Service

  @Column()
  serviceId:string

  @Column()
  customerId:string

  @Column()
  providerId:string

  @Column()
  status:string

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Appointment }
