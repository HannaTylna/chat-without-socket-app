import express, { Request, Response } from "express";
import * as userController from "../controllers/user-controller";
import { auth } from "../middlewares/auth";

const UserRouter = express.Router();

UserRouter.post("/register", userController.register);

UserRouter.post("/login", userController.login);

UserRouter.patch("/user", auth, userController.update);
export default UserRouter;
