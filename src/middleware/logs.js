const logMiddleware = (req,res,next) => {
    console.log('terjadi log ke', req.path)
    next()
}
module.exports = logMiddleware