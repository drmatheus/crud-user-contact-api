import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
export const destroyContactService = async (
  contactId: string
): Promise<void> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  await contactRepo.delete({ id: contactId });
};
