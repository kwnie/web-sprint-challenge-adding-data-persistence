// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
  
const db = require("../../data/dbConfig")

const getProjects = () => {
    return db("projects")
}

const getProjectById = (project_id) => {
    return db("projects")
        .where("project_id", project_id)
        .first()
}

module.exports = {
    getProjects,
    getProjectById
}