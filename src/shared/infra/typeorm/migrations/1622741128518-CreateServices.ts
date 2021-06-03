import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateServices1622741128518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'services',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'price',
          type: 'numeric'
        },
        {
          name: 'available',
          type: 'boolean'
        },
        {
          name: 'duration',
          type: 'integer'
        },
        {
          name: 'categoryId',
          type: 'uuid'
        },
        {
          name: 'userId',
          type: 'uuid'
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
          name: 'FKCategoryService',
          referencedTableName: 'categories',
          referencedColumnNames: ['id'],
          columnNames: ['categoryId'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL'
        },
        {
          name: 'FKUserService',
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services')
  }
}
