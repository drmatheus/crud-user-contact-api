import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Customer } from "../entities/customers.entity";
import { AppDataSource } from "../data-source";

export const verifyCustomerExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customerId: string = req.params.id;

  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  const customer: Customer | null = await customerRepo.findOne({
    relations: {
      user: true,
    },
    where: { id: customerId },
  });

  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  res.locals.customer = customer;

  next();
};
