import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TPostCustomer, TReturnCustomer } from "../../interfaces";
import { returnCustomerSchema } from "../../schemas";
import { Contact } from "../../entities/contacts.entity";
import { Customer } from "../../entities/customers.entity";

export const createCustomerService = async (
  costumerData: TPostCustomer,
  userId: string
): Promise<TReturnCustomer> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });

  const { phone, email, ...costumer } = costumerData;

  const newCustomer: Customer = customerRepo.create({
    ...costumer,
    user: user!,
  });
  const customer = await customerRepo.save(newCustomer);
  const createdCustomer = await customerRepo.save(customer);

  const newContactEmail: Contact = contactRepo.create({
    type: "email",
    contact: email,
    customer: createdCustomer,
  } as Contact);
  await contactRepo.save(newContactEmail);

  const newContactPhone: Contact = contactRepo.create({
    type: "phone",
    contact: phone,
    customer: createdCustomer,
  } as Contact);
  await contactRepo.save(newContactPhone);

  const customerData = await customerRepo.findOne({
    relations: {
      contacts: true,
    },
    where: { id: createdCustomer.id },
  });

  return returnCustomerSchema.parse(customerData);
};
