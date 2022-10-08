import { User } from "@chat-setInt-app/shared";
import { saveUser } from "../models/users-repository";

export const register = async (user: User): Promise<void> => {
    if (!(user.email && user.password)) {
        throw new Error("Data not formatted properly");
    }
    const newUser = await saveUser(user);

    return newUser;
};
