import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

export const verifyOwnerCustomer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const costumerId: string = res.locals.customer.user.id;
  const userId: string = res.locals.userId;

  if (costumerId !== userId) {
    throw new AppError("Action not allowed", 403);
  }

  next();
};
