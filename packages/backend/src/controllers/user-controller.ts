import { Request, Response } from "express-serve-static-core";
import * as userServices from "../services/user-service";
import { Credentials, User } from "@chat-setInt-app/shared";
import { UserModel } from "../models/users-repository";

export const register = async (req: Request, res: Response) => {
    const body = req.body as User;
    try {
        const existUser = await UserModel.findOne({ email: body.email }).exec();
        if (existUser) {
            res.status(403).json({ error: "User is already exist!" });
        } else if (body.email == "" || !body.email) {
            res.status(400).json({ error: "You need to enter email!" });
        } else if (body.password == "" || !body.password) {
            res.status(400).json({ error: "You need to enter password!" });
        }
        const newUser = await userServices.registerUser(body);
        res.status(201).json({ newUser });
    } catch (error) {
        return res.status(500);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const foundUser = await userServices.login(req.body);
        res.status(200).json(foundUser);
    } catch (error) {
        return res.status(500);
    }
};

export const profile = async (req: Request, res: Response) => {
    const user = req.body.user;
    try {
        const foundUser = await userServices.getUser(user);
        res.json(foundUser);
    } catch (error) {
        return res.status(500);
    }
};

export const update = async (req: Request, res: Response) => {
    const user = req.body.user;
    const { email, username } = req.body;
    const updateUser = await UserModel.findOneAndUpdate(
        { _id: user._id },
        {
            username: username,
            email: email,
        },
        { returnDocument: "after" }
    );
    res.status(200).json(updateUser);
};
