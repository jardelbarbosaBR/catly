import express from "express";
const router = express.Router();

import controller from "../controller/controller.js";

router.get("/", controller.homePage);
router.post("/new", controller.newUrl);
router.get("/:id", controller.redirection);
router.get('/:id/status', controller.statusUrl)

export default router;
