import {Router} from "express";
const urlRouter = Router();

import controller from "../controller/url.controller.js";
import { authorization } from "../middlewares/auth.middleware.js";

urlRouter.get("/", controller.homePage);
urlRouter.post("/new", authorization, controller.newUrl);
urlRouter.get("/:id", controller.redirection);
urlRouter.get('/:id/status', controller.statusUrl)
urlRouter.delete("/delete", controller.urlDelete)

export default urlRouter;
