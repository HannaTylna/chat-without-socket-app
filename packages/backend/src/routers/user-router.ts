import express, { Request, Response } from "express";
import * as userController from "../controllers/user-controller";

const UserRouter = express.Router();

UserRouter.post("/register", userController.registerOne);

UserRouter.post("/login", userController.loginOne);

export default UserRouter;
