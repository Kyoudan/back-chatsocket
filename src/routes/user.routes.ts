import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { findUserController } from "../useCases/FindOneUser";
import { loginUserController } from "../useCases/LoginUser";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
    return await loginUserController.handle(req, res);
});

router.post("/users", async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
});

router.get("/users", async (req: Request, res: Response) => {
    return await findUserController.handle(req, res);
});

export default router;
