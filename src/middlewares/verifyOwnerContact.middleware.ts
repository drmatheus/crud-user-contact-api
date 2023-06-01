import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

export const verifyOwnerContact = (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const userIdIncustomerId: string = res.locals.customer.user.id;
  const userId: string = res.locals.userId;
  const customerId: string = res.locals.customer.id;
  const customerIdInContact: string = res.locals.contact.customer.id;

  if (userIdIncustomerId !== userId || customerId !== customerIdInContact) {
    throw new AppError("Action not allowed", 403);
  }

  next();
};
