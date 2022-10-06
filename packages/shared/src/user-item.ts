export interface User extends Document {
    name: string;
    username: string;
    password: string;
    isAdmin?: boolean;
    status: "offline" | "online";
}
