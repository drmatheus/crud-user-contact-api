import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { customerRoutes } from "./routes/customer.routes";
import { contactRoutes } from "./routes/contact.routes";

const cors = require("cors");

const app: Application = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/customer", customerRoutes);
app.use("/contact", contactRoutes);

app.use(handleErrors);

export default app;
