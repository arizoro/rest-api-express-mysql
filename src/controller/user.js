const userModels = require('../models/user')

const getAlluser = async(req,res) => {
    try {
        const [datas] = await userModels.getAlluser()
    
        res.json({
            massage : "berhasil connect ke database",
            data : datas
        })
    } catch (error) {
        res.status(500).json({
            massage : "server Erorr",
            serverMassage : error
        })
    }
}

const getDetailUser = async(req,res) => {
    const {id} = req.params
    try {
        const [datas] = await userModels.getDetailUser(id)
    
        res.json({
            massage : `detail users dengan id : ${id}`,
            data : datas
        })
    } catch (error) {
        res.status(500).json({
            massage : "server Erorr",
            serverMassage : error
        })
    }

}

const createNewUser = async(req,res) => {
    const {body} = req

    try {
        await userModels.createNewUser(body)
        res.status(201).json({
            massage : "Create new user Success",
            data : body
        })
        
    } catch (error) {
        res.status(500).json({
            massage : "server Erorr",
            serverMassage : error
        })
    }
}

const updateUser = async(req,res) => {
    const {id} = req.params
    const {body} = req

    try {
        await userModels.updateUser(body,id)
        res.json({
            massage : "data berhasil di update",
            data : body
        })
    } catch (error) {
        res.status(500).json({
            massage : "server Erorr",
            serverMassage : error
        })
    }
}

const deleteUser = async(req,res) => {
    const {id} = req.params
    
    try {
        await userModels.delateUser(id)
        res.json({
            massage : "Data berhasil di delate",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            massage : "server Erorr",
            serverMassage : error
        })
    }
}

module.exports = {
    getAlluser,
    getDetailUser,
    createNewUser,
    updateUser,
    deleteUser
}