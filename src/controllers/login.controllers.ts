import { IToken, TLogin } from "../interfaces/login.interfaces";
import { postLoginService } from "../services/login/make.login.service";
import { Request, Response } from "express";

export const makeLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TLogin = req.body;

  const token: IToken = await postLoginService(loginData);

  return res.status(200).send(token);
};
