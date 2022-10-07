import express, { Request, Response } from "express";
import { createUser } from "../models/users-repository";

const UserRouter = express.Router();

UserRouter.post("/", createUser);

export default UserRouter;
