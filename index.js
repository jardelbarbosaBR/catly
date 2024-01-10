import express from "express";
import DbConection from "./src/db/db.js";
import dotenv from "dotenv";

import getRouter from './src/router/router.js';
import userRouter from './src/router/user.router.js'
import authRouter from './src/router/auth.router.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

DbConection();
app.use(express.json());
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/', getRouter)


app.listen(port, () => {
  console.log(`Servidor esta rotando no http://localhost:${port}`);
});
