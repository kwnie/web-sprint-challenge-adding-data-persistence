exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("project_id")
        table.text("project_name").notNull()
        table.text("project_description")
        table.boolean("project_completed")
    })

    await knex.schema.createTable("resources",(table) => {
        table.increments("resource_id")
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_notes")
        table.boolean("task_completed")
        table.integer("project_id")
            .references("project_id")
            .inTable("projects")
            .notNull()
    })

    await knex.schema.createTable("project_resources", (table) => {
        table.integer("project_id")
            .references("project_id")
            .inTable("projects")
            .notNull()
        table.integer("resource_id")
            .references("resource_id")
            .inTable("resources")
            .notNull()

        table.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
