 const db = require("../../data/dbConfig")

const getProjects = () => {
    return db("projects")
}

const getProjectById = (project_id) => {
    return db("projects")
        .where("project_id", project_id)
        .first()
}

const createProject = (newProject) => {
    return db("projects").insert(newProject)
}

module.exports = {
    getProjects,
    getProjectById,
    createProject
}