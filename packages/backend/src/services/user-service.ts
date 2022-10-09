import { User } from "@chat-setInt-app/shared";
import UserModel, { saveUser } from "../models/users-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret: string = process.env.JWT_TOKEN || "your_jwt_secret";

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
            const token = jwt.sign(
                { _id: foundUser._id?.toString(), email: foundUser.email },
                secret,
                {
                    expiresIn: "1800s",
                }
            );
            console.log(token);
            return user;
        } else {
            throw new Error("Password is not correct!");
        }
    } catch (error) {
        throw error;
    }
};
