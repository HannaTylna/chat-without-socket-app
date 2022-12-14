export interface User {
    _id?: string;
    email: string;
    username?: string;
    password: string;
    isAdmin?: boolean;
    status: "offline" | "online";
}
