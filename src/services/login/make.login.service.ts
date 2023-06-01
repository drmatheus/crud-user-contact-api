import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { TLogin, IToken } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";

export const postLoginService = async (loginData: TLogin): Promise<IToken> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const exist: boolean = await usersRepo.exist({
    where: { email: loginData.email },
  });

  if (!exist) {
    throw new AppError("Invalid credentials", 401);
  }

  const user: User | null = await usersRepo.findOne({
    where: { email: loginData.email },
  });

  const correctPass: boolean = await compare(
    loginData.password,
    user!.password
  );

  if (!correctPass) {
    throw new AppError("Invalid password", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "2h",
    subject: user!.id.toString(),
  });

  return { token: token };
};
