import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TPatchUser, TReturnUser } from "../../interfaces";
import { returnUserSchema } from "../../schemas";

export const updateUserService = async (
  userData: TPatchUser,
  userId: string
): Promise<TReturnUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  await userRepo.update(userId, userData as DeepPartial<User>);

  const attUser: User | null = await userRepo.findOne({
    where: { id: userId },
  });

  return returnUserSchema.parse(attUser);
};
