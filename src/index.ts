import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import routes from "./routes";
import { errorHandler } from "./middleware";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

const allowedOrigins = process.env.CLIENT_URL || "*";
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(options));
app.use("/api", routes);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
