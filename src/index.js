require('dotenv').config()
const PORT = process.env.PORT || 4000
const express = require('express')
const users = require('./routes/users')
const post = require('./routes/post')

const logMiddleware = require('./middleware/logs')
const uploaded = require('./middleware/multer')

const app = express()


app.use(express.json())
app.use('/image', express.static('public/images'))
app.use(logMiddleware)

app.use('/users',users)
app.post('/upload',uploaded.single('photo'),(req,res)=> {
    res.json({
        massage : "uploaded success"
    })
})

app.use((err,req,res,next)=> {
    res.json({
        massage : err
    })
})

app.use('/post',post)

app.get('/', (req,res) => {
    res.send('hello ari')
})

app.listen(PORT, () => {
    console.log(`server runnind di port : ${PORT}` )
})