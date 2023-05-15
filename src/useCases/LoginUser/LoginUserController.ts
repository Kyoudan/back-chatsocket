import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        if (!email)
            return res.status(400).json({ message: "Email is required" });
        if (!password)
            return res.status(400).json({ message: "Password is required" });

        try {
            const token = await this.loginUserUseCase.execute(email, password);

            return res.status(200).json(token);
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error",
            });
        }
    }
}
