
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 2048);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 2048);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.text('description', 2048)
            .notNullable();
        tbl.text('notes', 2048);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};
