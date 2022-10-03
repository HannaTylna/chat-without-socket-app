import MessageItem from "@chat-setInt-app/shared";
import { model, Schema, connect } from "mongoose";

const MessageSchema = new Schema({
    text: String,
    timeStamp: Date,
});

const MessageModel = model<MessageItem>("MessageItem", MessageSchema);

export const setupMongoDb = async (url: string) => {
    await connect(url);
};

export const loadAllMessageItems = async (): Promise<MessageItem[]> => {
    return MessageModel.find({}).exec();
};

export const saveMessageItem = async (
    messageItem: MessageItem
): Promise<void> => {
    const newModel = new MessageModel(messageItem);
    newModel.save();
};
