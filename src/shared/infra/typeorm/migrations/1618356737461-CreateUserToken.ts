import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUserToken1618356737461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'userToken',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'refreshToken',
          type: 'varchar'
        },
        {
          name: 'userId',
          type: 'uuid'
        },
        {
          name: 'expiresDate',
          type: 'timestamp'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        }
      ],
      foreignKeys: [
        {
          name: 'FKUserToken',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('userToken')
  }
}
