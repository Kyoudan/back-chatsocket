import prismaClient from "../../api/prismaClient";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserReposity implements IUserRepository {
    async findByEmail(email: string): Promise<User | null> {
        let user = await prismaClient.user.findFirst({
            where: { email },
        });

        return user as User | null;
    }

    async create(user: User): Promise<void> {
        await prismaClient.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
    }

    async login(email: string, password: string): Promise<string> {
        let user = await this.findByEmail(email);

        if (!user) throw new Error("User not found");

        const match = bcrypt.compareSync(password, user.password);

        if (!match) throw new Error("Incorrect password");

        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET as string,
            {
                expiresIn: 3600,
            }
        );

        return token;
    }
}
