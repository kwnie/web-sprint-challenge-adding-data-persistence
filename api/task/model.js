const db = require("../../data/dbConfig")

const getTasks = () => {
    return db("tasks as t")
        .leftJoin("projects as p", "p.project_id", "t.project_id")
        .select("t.*", "p.project_name", "p.project_description")
}

const getTaskById = (task_id) => {
    return db("tasks")
        .where("task_id", task_id)
        .first()
}

const createTask = (newTask) => {
    return db("tasks").insert(newTask)
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}