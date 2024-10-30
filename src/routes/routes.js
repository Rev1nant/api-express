import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router()

router.get('/users', userController.getUser)
router.post('/users', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router