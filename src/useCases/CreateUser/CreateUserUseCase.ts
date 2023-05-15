import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO) {
        const verifyUser = await this.usersRepository.findByEmail(data.email);

        if (verifyUser) {
            throw new Error("Usuario já existente");
        }

        const user = new User(data);

        await this.usersRepository.create(user);
    }
}
