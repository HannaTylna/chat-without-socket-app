import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { setupMongoDb } from "./models/db";
import messageRouter from "./routers/message-router";
import userRouter from "./routers/user-router";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());

app.use("/", userRouter);
app.use("/chat", messageRouter);

const port: number = parseInt(process.env.SERVER_PORT || "3001");
const mongoUrl: string =
    process.env.MONGO_URL || "mongodb://localhost:27017/message-app";

app.listen(port, async function () {
    await setupMongoDb(mongoUrl);
    console.log(`App is listening on port ${port} !`);
});
