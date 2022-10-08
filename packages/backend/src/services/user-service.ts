import { User } from "@chat-setInt-app/shared";
import UserModel, { saveUser } from "../models/users-repository";
import bcrypt from "bcrypt";

export const register = async (user: User): Promise<void> => {
    if (!(user.email && user.password)) {
        throw new Error("Enter email and password!");
    }
    const newUser = await saveUser(user);
    return newUser;
};

export const login = async (user: User): Promise<User> => {
    try {
        const foundUser = await UserModel.findOne({
            email: user.email,
        });
        if (!foundUser) {
            throw new Error("User with this email does not exist!");
        }
        const isMatch = bcrypt.compareSync(user.password, foundUser.password);

        if (isMatch) {
            return foundUser;
        } else {
            throw new Error("Password is not correct!");
        }
    } catch (error) {
        throw error;
    }
};
