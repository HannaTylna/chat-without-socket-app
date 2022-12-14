import { Message } from "@chat-setInt-app/shared";
import {
    saveMessageItem,
    loadAllMessageItems,
} from "../models/messages-repository";

export const saveMessage = async (messageItem: Message): Promise<Message[]> => {
    if (!messageItem.text || messageItem.text == "") {
        throw new Error("Write something!");
    }
    messageItem.timeStamp = new Date();
    await saveMessageItem(messageItem);
    return await loadAllMessageItems();
};

export const loadMessages = async (): Promise<Message[]> => {
    return await loadAllMessageItems();
};
