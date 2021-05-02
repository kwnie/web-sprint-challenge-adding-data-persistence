// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

const db = require("../../data/dbConfig")

const getResources = () => {
    return db("resources")
}

const getResourceById = (resource_id) => {
    return db("resources")
        .where("resource_id", resource_id)
        .first()
}

module.exports = {
    getResources,
    getResourceById
}