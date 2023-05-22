import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use(handleErrors);

export default app;
