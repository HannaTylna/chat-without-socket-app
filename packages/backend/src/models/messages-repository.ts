import { Message } from "@chat-setInt-app/shared";
import mongoose, { model, Schema } from "mongoose";

const MessageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timeStamps: Date,
});

const MessageModel = mongoose.model<Message>("MessageItem", MessageSchema);

export const loadAllMessageItems = async (): Promise<Message[]> => {
    return MessageModel.find({}).exec();
};

export const saveMessageItem = async (messageItem: Message): Promise<void> => {
    const newModel = new MessageModel(messageItem);
    newModel.save();
};
