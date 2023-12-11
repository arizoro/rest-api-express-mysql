const postModel = require('../models/post')

const getPost = async(req,res) => {

    try {
        const [data] = await postModel.getPost()
        console.log(data[0].user_id)
        res.json({
            massage : "connection success",
            data : data
        })
    } catch (error) {
        res.json({
            massage : "connection failed"
        })
    }
}

module.exports = {
    getPost
}