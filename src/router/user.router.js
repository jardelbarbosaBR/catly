import express from "express";
const router = express.Router();

// Middlewares
import { validUser } from "../middlewares/global.middlewares.js";
// Controller
import {findUserController, userSave} from "../controller/user.controller.js";


router.post("/", validUser, userSave);
router.get('/search', findUserController)

export default router;
