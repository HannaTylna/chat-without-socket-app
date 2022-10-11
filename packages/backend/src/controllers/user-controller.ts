import { Request, Response } from "express-serve-static-core";
import { getErrorMessage } from "../utils/errors";
import * as userServices from "../services/user-service";
import { User } from "@chat-setInt-app/shared";
import UserModel from "../models/users-repository";

export const register = async (req: Request, res: Response) => {
    const body = req.body as User;
    try {
        const exist = await UserModel.findOne({ email: body.email });
        if (exist) {
            res.send({ message: "User is already exist" });
        } else {
            res.send(await userServices.register(req.body));
        }
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const foundUser = await userServices.login(req.body);
        res.status(200).send(foundUser);
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};

export const update = async (req: Request, res: Response) => {
    res.json("hello!");
};
