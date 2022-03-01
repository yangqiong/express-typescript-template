import 'dotenv/config'
import express from "express";
import { db } from "./database/db";
import { router } from './routes';

const app = express();
app.use(router);

app.listen(process.env.PORT, async () => {
    await db.sync();
    console.log(`App running on ${process.env.PORT}`)
});