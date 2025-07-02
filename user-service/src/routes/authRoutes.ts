import { Router } from "express";
import AuthController from "../controllers/AuthController";

const userRouter = Router();

// Wrap async controller methods to handle promises properly
userRouter.post("/register", (req, res, next) => {
    AuthController.register(req, res).catch(next);
});
userRouter.post("/login", (req, res, next) => {
    AuthController.login(req, res).catch(next);
});

export default userRouter;