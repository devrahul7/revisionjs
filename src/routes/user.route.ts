import { UserController } from "../controllers/user.controllers";
import { Router } from "express";

const router: Router = Router();
const userRouter = Router();

const userController = new UserController();
userRouter.post("/register", userController.createUser);
userRouter.post("/login", userController.loginUser);


export default userRouter;
