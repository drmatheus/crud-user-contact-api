import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";

export const destroyCustomerService = async (
  customerId: string
): Promise<void> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  await customerRepo.delete({ id: customerId });
};
