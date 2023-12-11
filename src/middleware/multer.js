const multer = require('multer')
// const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'public/images')
    },
    filename : (req,file,cb) => {
        const rand = new Date().getTime()
        const fileName = file.originalname
        // const extension = path.extname(file.originalname)
        cb(null,`${rand}-${fileName}`)
    }
})

const uploaded = multer({
    storage: storage,
    limits :{
        fileSize : 2 *1000 *1000
    }
})

module.exports = uploaded