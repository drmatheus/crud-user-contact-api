import { Request, Response } from "express";
import { TPatchUser, TPostUser, TReturnUser } from "../interfaces";
import { createUserService } from "../services/users/create.user.service";
import { updateUserService } from "../services/users/update.user.service";
import { retrieveUserService } from "../services/users/retrieve.user.service";
import { destroyUserService } from "../services/users/destroy.user.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TPostUser = req.body;

  const newUser: TReturnUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TPatchUser = req.body;
  const userId: string = res.locals.userId;

  const attUser: TReturnUser = await updateUserService(userData, userId);

  return res.status(200).json(attUser);
};

export const retrieveUserController = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const user: TReturnUser = await retrieveUserService(userId);

  return res.status(200).json(user);
};

export const destroyUserController = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  await destroyUserService(userId);
  return res.status(204).json();
};
