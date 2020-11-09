import { Router } from "express";
import loginRoutes from "./loginRoutes";
import userRoutes from "./userRoutes";

export const createRoutes = (): Router => {
    const router = Router();
    router.use("/users", userRoutes())
    router.use("/login", loginRoutes())
    return router;
};
