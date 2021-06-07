import { createConnections } from 'typeorm'

export default async () => {
  return createConnections([
    {
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      database: 'nebulosa',
      username: 'docker',
      password: 'nebulosa',
      migrations: [
        './src/shared/infra/typeorm/migrations/*.ts'
      ],
      entities: ['./src/modules/**/entities/*.ts'],
      cli: {
        migrationsDir: './src/shared/infra/typeorm/migrations'
      }
    }
  ])
}
