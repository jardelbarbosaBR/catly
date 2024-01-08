import express from "express";
const router = express.Router()

import {userSave} from "../controller/user.controller.js";

router.post('/', userSave)

export default router