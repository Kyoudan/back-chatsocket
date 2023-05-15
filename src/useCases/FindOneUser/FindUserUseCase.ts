import { IUserRepository } from "./../../repositories/IUserRepository";

export class FindUserUseCase {
    constructor(private UserRepository: IUserRepository) {}

    async execute(email: string) {
        const user = await this.UserRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}
