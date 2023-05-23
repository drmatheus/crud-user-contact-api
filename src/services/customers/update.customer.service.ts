import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { TReturnCustomer } from "../../interfaces";
import { returnCustomerSchema } from "../../schemas";
import { TPatchCustomer } from "../../interfaces/customer.interfaces";

export const updateCustomerService = async (
  customerData: TPatchCustomer,
  customerId: string
): Promise<TReturnCustomer> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  await customerRepo.update(customerId, customerData as DeepPartial<Customer>);

  const attCustomer: Customer | null = await customerRepo.findOneBy({
    id: customerId,
  });

  return returnCustomerSchema.parse(attCustomer);
};
