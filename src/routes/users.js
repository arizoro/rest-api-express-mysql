const express = require('express')
const userController = require('../controller/user')


const router = express.Router()
router.get('/', userController.getAlluser)
router.get('/:id',userController.getDetailUser)

router.post('/', userController.createNewUser)

router.patch('/:id', userController.updateUser)

router.delete("/:id", userController.deleteUser)

module.exports = router