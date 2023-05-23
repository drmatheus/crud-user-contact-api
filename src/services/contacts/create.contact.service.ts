import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { TPostContact, TReturnCustomer } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { returnCustomerSchema } from "../../schemas";

export const createContactService = async (
  customerId: string,
  contactData: TPostContact
): Promise<TReturnCustomer> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  const customer: Customer = await customerRepo.findOneByOrFail({
    id: customerId,
  });
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const newContact: Contact = contactRepo.create({
    ...contactData,
    customer: customer,
  } as Contact);
  await contactRepo.save(newContact);

  const customerReturn: Customer = await customerRepo.findOneOrFail({
    where: { id: customerId },
    relations: {
      contacts: true,
    },
  });

  return returnCustomerSchema.parse(customerReturn);
};
