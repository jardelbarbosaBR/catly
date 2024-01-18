import { Router } from "express";
const router = Router();

// Middlewares
import { verifyUser } from "../middlewares/global.middlewares.js";
// Controller
import {
  findUserOne,
  userSave,
  findUserAll,
  deleteUser,
} from "../controller/user.controller.js";

router.post("/", verifyUser, userSave);
router.get("/", findUserOne);
router.get("/all", findUserAll);
router.delete("/", deleteUser);
export default router;
