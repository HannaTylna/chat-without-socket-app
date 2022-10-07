export interface User {
    _id?: string;
    mail: string;
    username?: string;
    password: string;
    isAdmin?: boolean;
    //status: "offline" | "online";
}
