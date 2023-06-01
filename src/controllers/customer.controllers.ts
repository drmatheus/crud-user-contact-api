import { Request, Response } from "express";
import { TPostCustomer, TReturnCustomer } from "../interfaces";
import { createCustomerService } from "../services/customers/create.customer.service";
import { destroyCustomerService } from "../services/customers/destroy.customer.service";
import { retrieveCustomerService } from "../services/customers/retrieve.customer.service";
import { listCustomerService } from "../services/customers/list.customer.service";
import { TPatchCustomer } from "../interfaces/customer.interfaces";
import { updateCustomerService } from "../services/customers/update.customer.service";

export const createCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerData: TPostCustomer = req.body;
  const userId: string = res.locals.userId;

  const newCustomer: TReturnCustomer = await createCustomerService(
    customerData,
    userId
  );

  return res.status(201).json(newCustomer);
};

export const updateCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerData: TPatchCustomer = req.body;
  const customerId: string = res.locals.customer.id;

  const attCustomer: TReturnCustomer = await updateCustomerService(
    customerData,
    customerId
  );

  return res.status(200).json(attCustomer);
};

export const retrieveCustomerController = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.customer.id;

  const customer: TReturnCustomer = await retrieveCustomerService(userId);

  return res.status(200).json(customer);
};

export const destroyCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerId: string = res.locals.customer.id;

  await destroyCustomerService(customerId);
  return res.status(204).json();
};

export const listCustomerController = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.userId;

  const costumers: TReturnCustomer[] = await listCustomerService(userId);
  return res.status(200).json(costumers);
};
