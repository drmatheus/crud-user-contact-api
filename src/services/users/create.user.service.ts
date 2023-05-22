import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TPostUser, TReturnUser } from "../../interfaces";
import { returnUserSchema } from "../../schemas";

export const createUserService = async (
  userData: TPostUser
): Promise<TReturnUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepo.create(userData);

  return returnUserSchema.parse(await userRepo.save(newUser));
};
