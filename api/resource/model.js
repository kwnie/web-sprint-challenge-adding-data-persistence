const db = require("../../data/dbConfig")

const getResources = () => {
    return db("resources")
}

const getResourceById = (resource_id) => {
    return db("resources")
        .where("resource_id", resource_id)
        .first()
}

const createResource = (newResource) => {
    return db("resources").insert(newResource)
}

module.exports = {
    getResources,
    getResourceById,
    createResource
}