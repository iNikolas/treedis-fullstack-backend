import { StatusCodes } from "http-status-codes";

export class HttpError extends Error {
  code: StatusCodes;
  constructor(message: string, code: StatusCodes) {
    super(message);
    this.name = "HttpError";
    this.code = code;
  }
}
