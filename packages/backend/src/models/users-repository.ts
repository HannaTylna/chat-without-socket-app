import mongoose, { model, Schema } from "mongoose";
import { User } from "@chat-setInt-app/shared";
import bcrypt from "bcrypt";

const User = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: "offline",
    },
});

const UserModel = model<User>("User", User);

export const saveUser = async (user: User): Promise<void> => {
    const newUser = new UserModel(user);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(user.password, salt);
    newUser.save();
};
export default { UserModel, User };
