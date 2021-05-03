const db = require("../../data/dbConfig")

const getTasks = () => {
    return db("tasks")
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