import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const secret: Secret = process.env.JWT_TOKEN || "your_jwt_secret";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization!.split(" ")[1];
        if (!token) {
            throw new Error();
        }
        const decoded = jwt.verify(token, secret);
        req.body.user = decoded;
        console.log(decoded);
        next();
    } catch (err) {
        res.status(401).send("Please authenticate!");
    }
};
