import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { TReturnCustomer } from "../../interfaces";
import { returnCustomerSchema } from "../../schemas";

export const retrieveCustomerService = async (
  customerId: string
): Promise<TReturnCustomer> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);

  return returnCustomerSchema.parse(
    await customerRepo.findOne({
      relations: {
        contacts: true,
      },
      where: { id: customerId },
    })
  );
};
