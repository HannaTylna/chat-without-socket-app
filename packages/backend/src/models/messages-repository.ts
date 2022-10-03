import MessageItem from "@chat-setInt-app/shared";
import ChatItem from "@chat-setInt-app/shared";

import { model, Schema, connect } from "mongoose";

const MessageSchema = new Schema({
    text: String,
    timeStamp: Date,
});

const MessageModel = model<MessageItem>("MessageItem", MessageSchema);

export const setupMongoDb = async (url: string) => {
    await connect(url);
};
