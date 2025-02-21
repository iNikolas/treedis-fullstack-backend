import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import tagsService from "../services/tags.service";

class TagsController {
  async getTags(req: Request, res: Response, __: NextFunction) {
    const search = req.query.search;

    return res
      .status(StatusCodes.OK)
      .json(tagsService.getTags(search ? String(search) : ""));
  }
}

export default new TagsController();
