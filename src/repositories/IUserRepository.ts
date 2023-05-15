import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<void>;
    login(email: string, password: string): Promise<string>;
}
