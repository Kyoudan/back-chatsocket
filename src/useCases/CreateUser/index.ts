import { UserReposity } from "../../repositories/implementations/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const UsersRepository = new UserReposity();

const createUserUseCase = new CreateUserUseCase(UsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };