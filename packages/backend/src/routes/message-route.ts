import MessageItem from "@chat-setInt-app/shared";
import express, { Request, Response } from "express";
import { saveMessage } from "../services/messages-service";

const MessageRoute = express.Router();

MessageRoute.post("/", async (req: Request, res: Response<MessageItem[]>) => {
    try {
        res.send(await saveMessage(req.body));
    } catch (err) {
        res.sendStatus(400);
    }
});

export default MessageRoute;
