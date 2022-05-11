/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movimentacoes', table => {
        table.increments('id').primary;
        table.integer('idContainer').references('id').inTable('containers').notNullable();
        table.integer('idTipo').references('id').inTable('tipos').notNullable();
        table.dateTime('dataHoraInicio').notNullable();
        table.dateTime('dataHoraFim').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('movimentacoes');
};
