const checkTaskPayload = () => {
    return (req, res, next) => {
      if(!req.body.task_description){
        return res.status(400).json({
          message: `Task name is missing`
        })
      } else {
        next()
      }
    }
  }


module.exports = {
    checkTaskPayload
}