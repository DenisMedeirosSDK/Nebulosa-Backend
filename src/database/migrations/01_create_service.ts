import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('services', table => {
    table.increments('id').primary()
    table.string('skill').notNullable()
    table.decimal('cost').notNullable()

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}
export async function down(knex: knex) {
  return knex.schema.dropTable('services')
}
