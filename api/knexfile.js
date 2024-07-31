// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost:5432/postgres',
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
