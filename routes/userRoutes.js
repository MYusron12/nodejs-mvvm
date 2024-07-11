const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/users', userController.getAllUser)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUserById)

module.exports = router