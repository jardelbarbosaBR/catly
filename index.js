import express, { json } from "express";
import DbConection from "./src/db/db.js";
import getRouter from './src/router/router.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

DbConection();
app.use(express.json());
app.use('/', getRouter)

app.listen(port, () => {
  console.log(`Servidor esta rotando no http://localhost:${port}`);
});
