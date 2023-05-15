import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const router = Router();

router.post("/users", async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
});

export default router;
