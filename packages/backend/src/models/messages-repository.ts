import { Message } from "@chat-setInt-app/shared";
import { model, Schema, connect } from "mongoose";

const MessageSchema = new Schema({
    user: {
        type: {
            user_id: String,
            name: String,
            username: String,
        },
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timeStamps: Date,
});

const MessageModel = model<Message>("MessageItem", MessageSchema);

export const loadAllMessageItems = async (): Promise<Message[]> => {
    return MessageModel.find({}).exec();
};

export const saveMessageItem = async (messageItem: Message): Promise<void> => {
    const newModel = new MessageModel(messageItem);
    newModel.save();
};
