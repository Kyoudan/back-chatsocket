import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    constructor(private FindUserUseCase: FindUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        try {
            const user = await this.FindUserUseCase.execute(email);

            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error",
            });
        }
    }
}
