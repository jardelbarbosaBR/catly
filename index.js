import express, { json } from "express";
import DbConection from "./src/db/db.js";

import dotenv from "dotenv";
dotenv.config();

import getRouter from './src/router/router.js';
import userRouter from './src/router/user.router.js'

const app = express();
const port = process.env.PORT || 3000;

DbConection();
app.use(express.json());
app.use('/', getRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Servidor esta rotando no http://localhost:${port}`);
});
