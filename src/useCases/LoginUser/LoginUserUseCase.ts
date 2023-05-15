import { IUserRepository } from "../../repositories/IUserRepository";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(email: string, password: string): Promise<string> {
        const token = await this.userRepository.login(email, password);
        return token;
    }
}
