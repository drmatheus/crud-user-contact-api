import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TReturnUser } from "../../interfaces";
import { returnUserSchema } from "../../schemas";

export const retrieveUserService = async (
  userId: string
): Promise<TReturnUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOne({
    where: { id: userId },
  });

  console.log(user);

  return returnUserSchema.parse(user);
};
