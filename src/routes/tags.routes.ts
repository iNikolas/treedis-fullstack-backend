import express from "express";

import { catchAsyncErrors } from "../middleware";
import tagsController from "../controllers/tags.controller";

const router = express.Router();

router.get("/", catchAsyncErrors(tagsController.getTags));

export default router;
