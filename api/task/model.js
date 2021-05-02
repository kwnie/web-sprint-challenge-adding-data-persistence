// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

const db = require("../../data/dbConfig")

const getTasks = () => {
    return db("tasks")
}

const getTaskById = (task_id) => {
    return db("tasks")
        .where("task_id", task_id)
        .first()
}

module.exports = {
    getTasks,
    getTaskById
}