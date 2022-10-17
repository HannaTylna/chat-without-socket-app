import { User } from "@chat-setInt-app/shared";
import { createUser, UserModel } from "../models/users-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret: string = process.env.JWT_TOKEN || "your_jwt_secret";

export const registerUser = async (user: User): Promise<void> => {
    if (user.email == "" || !user.email) {
        throw new Error("Enter email");
    }
    if (user.password == "" || !user.password) {
        throw new Error("Enter password");
    }
    const register = await createUser(user);
    return register;
};

export const login = async (user: User): Promise<any> => {
    try {
        const foundUser = await UserModel.findOne({
            email: user.email,
        });
        if (!foundUser) {
            throw new Error("User with this email does not exist!");
        }
        const isMatch = bcrypt.compareSync(user.password, foundUser.password);

        if (isMatch) {
            const token = jwt.sign(
                { _id: foundUser._id?.toString(), email: foundUser.email },
                secret,
                {
                    expiresIn: "24h",
                }
            );
            return { user, token };
        } else {
            throw new Error("Password is not correct!");
        }
    } catch (error) {
        throw error;
    }
};

export const getUser = async (user: User) => {
    try {
        const currentUser = await UserModel.findOne({
            id: user._id,
        });
        return currentUser;
    } catch (error) {
        throw error;
    }
};
