import { Request } from "express";

export interface DecodedLogged {
    logged: boolean;
  }

export interface CustomRequest extends Request {
  token?: string;
}
