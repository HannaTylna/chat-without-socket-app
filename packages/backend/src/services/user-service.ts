import { User } from "@chat-setInt-app/shared";
import { saveUser } from "../models/users-repository";

export const register = async (user: User): Promise<void> => {
    if (!(user.email && user.password)) {
        throw new Error("Enter email and password!");
    }
    const newUser = await saveUser(user);
    return newUser;
};
