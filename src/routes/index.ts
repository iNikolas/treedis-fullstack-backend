import express from "express";

import tagsRoutes from "./tags.routes";

const routes = express.Router();

routes.use("/tags", tagsRoutes);

export default routes;
