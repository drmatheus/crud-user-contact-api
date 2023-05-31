import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { TReturnCustomer } from "../../interfaces";
import { returnListCustomersSchema } from "../../schemas";

export const listCustomerService = async (
  userId: string
): Promise<TReturnCustomer[]> => {
  const customerRepo: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  return returnListCustomersSchema.parse(
    await customerRepo.find({
      relations: {
        contacts: true,
      },
      where: { user: { id: userId } },
      order: {
        name: "ASC",
      },
    })
  );
};
