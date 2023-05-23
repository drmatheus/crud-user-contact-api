import { Request, Response } from "express";
import { TPatchContact, TPostContact, TReturnCustomer } from "../interfaces";
import { createContactService } from "../services/contacts/create.contact.service";
import { updateContactService } from "../services/contacts/update.contact.service";
import { destroyContactService } from "../services/contacts/delete.contact.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TPostContact = req.body;
  const customerId: string = res.locals.customer.id;
  const customer: TReturnCustomer = await createContactService(
    customerId,
    contactData
  );

  return res.status(201).json(customer);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TPatchContact = req.body;
  const customerId: string = res.locals.customer.id;
  const contactId: string = req.params.contactId;

  const customer: TReturnCustomer = await updateContactService(
    customerId,
    contactData,
    contactId
  );

  return res.status(200).json(customer);
};

export const destroyContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customerId: string = req.params.contactId;
  await destroyContactService(customerId);
  return res.status(204).json();
};
