import { Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
    const { name, username, password } = req.body;
    res.sendStatus(200);
};

export default { createUser };
