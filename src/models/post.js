const dbPool = require('../config/database')

const getPost = () => {
    const sqlQuery = `SELECT   post.*, users.nama,users.email FROM post,users WHERE post.user_id=users.id `
    return dbPool.execute(sqlQuery)
}

module.exports = {
    getPost
}