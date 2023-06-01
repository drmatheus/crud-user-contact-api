import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";

export const verifyContactExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId: string = req.params.contactId;

  const customerRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await customerRepo.findOne({
    relations: {
      customer: true,
    },
    where: { id: contactId },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  res.locals.contact = contact;

  next();
};
