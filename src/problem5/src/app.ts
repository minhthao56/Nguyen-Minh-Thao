import express, { Express, Router } from "express";
import bodyParser from "body-parser";

import morgan from "morgan";
import routerResource from "./routers/resource";

const currentVersion = "v1";

export async function startServer() {
  const app: Express = express();
  const port = 7070;

  try {
    // const conn = await Database.getConnection();

    // Set app variables
    // app.set("firebaseAuth", firebaseAuth);
    // app.set("db", conn);
    // app.set("twilioService", twilioService);
    // app.set("expo", expo);

    // Middleware
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

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