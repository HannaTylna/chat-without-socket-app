export interface Message {
    _id?: string;
    text: string;
    timeStamp: Date;
    user: {
        user_id: string;
        username: string;
        name: string;
    };
}
