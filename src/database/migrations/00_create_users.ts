import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable()
  })
}
export async function down(knex: knex) {
  return knex.schema.dropTable('users')
}
