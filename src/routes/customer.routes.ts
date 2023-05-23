import { Router } from "express";
import {
  destroyCustomerController,
  updateCustomerController,
  createCustomerController,
  retrieveCustomerController,
  listCustomerController,
} from "../controllers/";
import {
  verifyResquestData,
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
} from "../middlewares/";
import { newCustomerSchema, patchCustomerSchema } from "../schemas/";

export const customerRoutes: Router = Router();

customerRoutes.post(
  "",
  verifyAuthetication,
  verifyResquestData(newCustomerSchema),
  createCustomerController
);
customerRoutes.patch(
  "/:id/",
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
  verifyResquestData(patchCustomerSchema),
  updateCustomerController
);
customerRoutes.delete(
  "/:id/",
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
  destroyCustomerController
);

customerRoutes.get("", verifyAuthetication, listCustomerController);

customerRoutes.get(
  "/:id/",
  verifyAuthetication,
  verifyCustomerExist,
  verifyOwnerCustomer,
  retrieveCustomerController
);
