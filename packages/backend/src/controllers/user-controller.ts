import { Request, Response } from "express-serve-static-core";
import { getErrorMessage } from "../utils/errors";
import * as userServices from "../services/user-service";

export const registerOne = async (req: Request, res: Response) => {
    try {
        res.send(await userServices.register(req.body));
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};
