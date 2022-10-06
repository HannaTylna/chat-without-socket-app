import { Message } from "@chat-setInt-app/shared";
import express, { Request, Response } from "express";
import { saveMessage, loadMessages } from "../services/messages-service";

const MessageRouter = express.Router();

MessageRouter.get("/", async (req: Request, res: Response<Message[]>) => {
    res.send(await loadMessages());
});

MessageRouter.post("/", async (req: Request, res: Response<Message[]>) => {
    try {
        res.send(await saveMessage(req.body));
    } catch (err) {
        res.sendStatus(400);
    }
});

export default MessageRouter;
