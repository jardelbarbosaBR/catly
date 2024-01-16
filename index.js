import express from "express";
import DbConection from "./src/db/db.js";
import cors from "cors";
import dotenv from "dotenv";

import getRouter from "./src/router/url.router.js";
import userRouter from "./src/router/user.router.js";
import authRouter from "./src/router/auth.router.js";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

DbConection();
app.set("trust proxy", "loopback, linklocal, uniquelocal");
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/", getRouter);

app.listen(port, () => {
  console.log(`Servidor esta rotando no http://localhost:${port}`);
});
