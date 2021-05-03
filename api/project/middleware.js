const checkProjectPayload = () => {
    return (req, res, next) => {
      if(!req.body.project_name){
        return res.status(400).json({
          message: `Project name is missing`
        })
      } else {
        next()
      }
    }
  }


module.exports = {
    checkProjectPayload
}