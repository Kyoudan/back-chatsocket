import prismaClient from "../../api/prismaClient";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserReposity implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        let user = await prismaClient.user.findFirst({
            where: { email },
        });

        return user;
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
}
