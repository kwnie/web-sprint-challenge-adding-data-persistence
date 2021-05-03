const checkResourcePayload = () => {
    return (req, res, next) => {
      if(!req.body.resource_name){
        return res.status(400).json({
          message: `Resource name is missing`
        })
      } else {
        next()
      }
    }
  }

module.exports = {
    checkResourcePayload
}