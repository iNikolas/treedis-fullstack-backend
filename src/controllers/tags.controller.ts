import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import tagsService from "../services/tags.service";

class TagsController {
  async getTags(_: Request, res: Response, __: NextFunction) {
    return res.status(StatusCodes.OK).json(tagsService.getTags());
  }
}

export default new TagsController();
