const express = require("express")
const { getProjects, getProjectById, createProject } = require("../project/model")
const { checkProjectPayload } = require("./middleware")

const router = express.Router()

router.get("/api/projects", async (req, res, next) => {
    try {
        const projects = await getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

router.post("/api/projects", checkProjectPayload(), async (req, res, next) => {
    try {
        const [id] = await createProject(req.body)
        const project = await getProjectById(id)
        res.json(project)
    } catch(err) {
        next(err)
    }
})

module.exports = router