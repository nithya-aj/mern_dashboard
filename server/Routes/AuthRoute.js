import express from "express"
import { changePassword, loginUser, registerUser } from "../Controllers/AuthControllers.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', changePassword)
export default router