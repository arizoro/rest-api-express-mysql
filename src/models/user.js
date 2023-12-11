const dbPool = require('../config/database')

const getAlluser = () => {
    const sqlQuery = "SELECT * FROM users"
    
    return dbPool.execute(sqlQuery)
}

const getDetailUser = (id) => {
    const sqlQuery = `SELECT * FROM users WHERE id = ${id} `
    return dbPool.execute(sqlQuery)
}

const createNewUser = (body) => {
    const sqlQuery = `INSERT INTO users (nama,email,addres)
    VALUES ('${body.nama}','${body.email}', '${body.addres}')`
    return dbPool.execute(sqlQuery)
}

const updateUser = (body, id) => {
    const sqlQuery = `UPDATE users SET nama='${body.nama}' , email='${body.email}',
        addres='${body.addres}' WHERE id=${id}`
    return dbPool.execute(sqlQuery)
}

const delateUser = (id) => {
    const sqlQuery = `DELETE FROM users WHERE id=${id} `
    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAlluser,
    getDetailUser,
    createNewUser,
    updateUser,
    delateUser
}