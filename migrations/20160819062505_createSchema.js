
exports.up = function(knex, Promise) {
  return PromiseAll([
    knex.schema.createTable('users', (table) => {
      table.increments();
    }),
    knex.schema.createTable('roles', (table) => {
      table.increments();
    }),
    knex.schema.createTable('permissions', (table) => {
      table.increments();
    }),
    knex.schema.createTable('users_roles', (table) => {
      table.increments();
    }),
    knex.schema.createTable('roles_permissions', (table) => {
      table.increments();
    }),
    knex.schema.createTable('games', (table) => {
      table.increments();
    }),
    knex.schema.createTable('gameEvents', (table) => {
      table.increments();
    }),
    knex.schema.createTable('eventTypes', (table) => {
      table.increments();
    }),
    knex.schema.createTable('games_gameEvents', (table) => {
      table.increments();
    }),
    knex.schema.createTable('gameEvents_eventTypes', (table) => {
      table.increments();
    }),
    knex.schema.createTable('activePlayers', (table) => {
      table.increments();
    })
  ])
};

exports.down = function(knex, Promise) {
  return PromiseAll([
    knex.raw('drop table if exists users cascade')
    knex.raw('drop table if exists roles cascade')
    knex.raw('drop table if exists permissions cascade')
    knex.raw('drop table if exists users_roles cascade')
    knex.raw('drop table if exists roles_permissions cascade')
    knex.raw('drop table if exists games cascade')
    knex.raw('drop table if exists gameEvents cascade')
    knex.raw('drop table if exists eventTypes cascade')
    knex.raw('drop table if exists games_gameEvents cascade')
    knex.raw('drop table if exists gameEvents_eventTypes cascade')
    knex.raw('drop table if exists activePlayers cascade')
  ])
};
