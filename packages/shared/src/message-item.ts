export interface Message {
    _id?: string;
    text: string;
    timeStamp: Date;
    user: {
        _id: string;
        username: string;
    };
}
