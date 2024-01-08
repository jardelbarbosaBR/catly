import express from "express";
const router = express.Router()

// Middlewares
import {validUser} from "../middlewares/user.middlewares.js";
// Controller
import {userSave} from "../controller/user.controller.js";

router.post('/', validUser,  userSave)

export default router