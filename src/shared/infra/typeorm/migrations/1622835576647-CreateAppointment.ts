import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAppointment1622835576647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'appointments',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'date',
          type: 'timestamp'
        },
        {
          name: 'serviceId',
          type: 'uuid'
        },
        {
          name: 'customerId',
          type: 'uuid'
        },
        {
          name: 'providerId',
          type: 'uuid'
        },
        {
          name: 'status',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ],
      foreignKeys: [
        {
          name: 'FKServiceAppointment',
          referencedTableName: 'services',
          referencedColumnNames: ['id'],
          columnNames: ['serviceId'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL'
        },
        {
          name: 'FKServiceUserCustomer',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['customerId'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL'
        },
        {
          name: 'FKServiceUserProvider',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['providerId'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments')
  }
}
