import express from "express";
const router = express.Router();

// Middlewares
import { validUser } from "../middlewares/global.middlewares.js";
// Controller
import {findUserOne, userSave, findUserAll, deleteUser} from "../controller/user.controller.js";


router.post("/", validUser, userSave);
router.get('/', findUserOne)
router.get("/all", findUserAll)
router.delete("/", deleteUser )
export default router;
