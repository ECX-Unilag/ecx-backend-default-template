import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";
import * as morgan from "morgan";
import * as compression from "compression";

import {
  corsOptions,
  notFoundHandler,
  errorHandler,
  globalRateLimiter,
  config,
} from "../core";
import { appRouter } from "./app.router";

export const app = express();

if(config.app.environment.isInDevelopment || config.app.environment.isInTesting){
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(helmet());
app.disable('x-powered-by');  
app.use(compression());
app.use(globalRateLimiter);
app.use(cors(corsOptions));
app.use("/api/v1", appRouter);
app.use(notFoundHandler.handle);
app.use(errorHandler.handle);
