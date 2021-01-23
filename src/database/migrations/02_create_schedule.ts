import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('service_schedule', table => {
    table.increments('id').primary()

    table.integer('week_day').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()

    table.integer('service_id')
      .notNullable()
      .references('id')
      .inTable('services')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}
export async function down(knex: knex) {
  return knex.schema.dropTable('service_schedule')
}
