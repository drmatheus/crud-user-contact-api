import { Router } from "express";
import {
  destroyContactController,
  updateContactController,
  createContactController,
} from "../controllers/";
import {
  verifyResquestData,
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
  verifyOwnerContact,
  verifyContactExist,
} from "../middlewares/";
import { newContactSchema } from "../schemas/";

export const contactRoutes: Router = Router();

contactRoutes.post(
  "/:id",
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
  verifyResquestData(newContactSchema),
  createContactController
);
contactRoutes.patch(
  "/:id/:contactId/",
  verifyAuthetication,
  verifyCustomerExist,
  verifyContactExist,
  verifyOwnerContact,
  verifyResquestData(newContactSchema),
  updateContactController
);
contactRoutes.delete(
  "/:id/:contactId/",
  verifyAuthetication,
  verifyCustomerExist,
  verifyContactExist,
  verifyOwnerContact,
  destroyContactController
);
