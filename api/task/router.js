const express = require("express")
const { getTasks, getTaskById, createTask } = require("../task/model")
const { checkTaskPayload } = require("./middleware")

const router = express.Router()

router.get("/api/tasks", async (req, res, next) => {
    try {
        const Tasks = await getTasks()
        res.json(Tasks)
    } catch(err) {
        next(err)
    }
})

router.post("/api/tasks", checkTaskPayload(), async (req, res, next) => {
    try {
        const [id] = await createTask(req.body)
        const task = await getTaskById(id)
        res.json(task)
    } catch(err) {
        next(err)
    }
})

module.exports = router

