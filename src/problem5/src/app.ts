import express, { Express, Router } from "express";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

import morgan from "morgan";
import routerResource from "./routers/resource";
import { createConnectionQuery } from "./db/connection";

const currentVersion = "v1";

export async function startServer() {
  const app: Express = express();
  const port = 7070;

  try {
    const conn = createConnectionQuery();

    // Set app variables
    app.set("db", conn);
    // Middleware
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    // Routers

    const privateRouter = Router(); 
    app.use(`/api/${currentVersion}`, privateRouter);
    privateRouter.use("/resource", routerResource);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log("Error in start service", e);
  }
}