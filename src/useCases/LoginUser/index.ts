import { UserReposity } from "../../repositories/implementations/UserRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { LoginUserController } from "./LoginUserController";

const userRepository = new UserReposity();
const loginUserUseCase = new LoginUserUseCase(userRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserUseCase, loginUserController}

