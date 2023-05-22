import { Router } from "express";
import {
  destroyUserController,
  updateUserController,
  createUserController,
  retrieveUserController,
} from "../controllers/";
import {
  verifyResquestData,
  verifyEmailUnique,
  verifyAuthetication,
} from "../middlewares/";
import { newUserSchema, patchUserSchema } from "../schemas/";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyEmailUnique,
  verifyResquestData(newUserSchema),
  createUserController
);
userRoutes.patch(
  "",
  verifyAuthetication,
  verifyEmailUnique,
  verifyResquestData(patchUserSchema),
  updateUserController
);
userRoutes.delete("", verifyAuthetication, destroyUserController);
userRoutes.get("", verifyAuthetication, retrieveUserController);
