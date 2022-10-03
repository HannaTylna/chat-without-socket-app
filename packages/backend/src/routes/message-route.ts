import MessageItem from "@chat-setInt-app/shared";
import express, { Request, Response } from "express";
import { saveMessage, loadMessages } from "../services/messages-service";

const MessageRoute = express.Router();

MessageRoute.get("/", async (req: Request, res: Response<MessageItem[]>) => {
    res.send(await loadMessages());
});

MessageRoute.post("/", async (req: Request, res: Response<MessageItem[]>) => {
    try {
        res.send(await saveMessage(req.body));
    } catch (err) {
        res.sendStatus(400);
    }
});

export default MessageRoute;
