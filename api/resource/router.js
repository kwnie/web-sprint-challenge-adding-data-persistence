const express = require("express")
const { getResources, getResourceById, createResource } = require("../resource/model")
const { checkResourcePayload } = require("./middleware")

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
    try {
        const resources = await getResources()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})

router.post("/api/resources", checkResourcePayload(), async (req, res, next) => {
    try {
        const [id] = await createResource(req.body)
        const resource = await getResourceById(id)
        res.json(resource)
    } catch(err) {
        next(err)
    }
})

module.exports = router
