import { Router } from "express";
const router = Router();

import { login, authorization } from "../controller/auth.controller.js";

router.post("/", login);
router.post("/verify", authorization);
export default router;
