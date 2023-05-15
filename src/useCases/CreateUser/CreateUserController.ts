import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        if (!name) return res.status(400).json({ message: "Name is required" });
        if (!email)
            return res.status(400).json({ message: "Email is required" });
        if (!password)
            return res.status(400).json({ message: "Password is required" });

        try {
            await this.createUserUseCase.execute({ name, email, password });

            return res
                .status(201)
                .json({ message: "User created successfully" });
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error",
            });
        }
    }
}

