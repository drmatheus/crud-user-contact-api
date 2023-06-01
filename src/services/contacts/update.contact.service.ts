import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { TPatchContact, TReturnCustomer } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { returnCustomerSchema } from "../../schemas";

export const updateContactService = async (
  customerId: string,
  contactData: TPatchContact,
  contactId: string
): Promise<TReturnCustomer> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  await contactRepo.update(contactId, contactData as Contact);

  const customerReturn: Customer = await customerRepo.findOneOrFail({
    where: { id: customerId },
    relations: { contacts: true },
  });

  return returnCustomerSchema.parse(customerReturn);
};
