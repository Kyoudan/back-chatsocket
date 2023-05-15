import { UserReposity } from "../../repositories/implementations/UserRepository";
import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserController } from "./FindUserController";

const UsersRepository = new UserReposity();

const findUserUseCase = new FindUserUseCase(UsersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController };
