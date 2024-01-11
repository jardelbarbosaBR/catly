import {Router} from "express";
const router = Router();

import controller from "../controller/controller.js";

router.get("/", controller.homePage);
router.post("/new", controller.newUrl);
router.get("/:id", controller.redirection);
router.get('/:id/status', controller.statusUrl)
router.delete("/delete", controller.urlDelete)

export default router;
