import MessageItem from "@chat-setInt-app/shared";
import {
    saveMessageItem,
    loadAllMessageItems,
} from "../models/messages-repository";

export const saveMessage = async (
    messageItem: MessageItem
): Promise<MessageItem[]> => {
    if (!messageItem.text || messageItem.text == "") {
        throw new Error("Write something!");
    }
    messageItem.timeStamp = new Date();
    await saveMessageItem(messageItem);
    return await loadAllMessageItems();
};

export const loadMessages = async (): Promise<MessageItem[]> => {
    return await loadAllMessageItems();
};
