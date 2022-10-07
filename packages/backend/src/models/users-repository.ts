import mongoose, { Schema, Types } from "mongoose";
import { User } from "@chat-setInt-app/shared";

const UserSchema = new Schema({
    mail: {
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
    timeStamp: Date,
});

const UserModel = mongoose.model<User>("User", UserSchema);

export const createUser = async (user: User): Promise<User> => {
    const newUser = new UserModel(user);
    newUser._id = new Types.ObjectId().toString();
    newUser.save();
    return newUser;
};
