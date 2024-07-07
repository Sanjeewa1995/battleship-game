import { Application, Router } from "express";
import * as shipController from "../controllers/shipcontroller";

export default (app: Application): void => {
  const router: Router = Router();

  router.post("/place", shipController.placeShip);

  app.use("/api/ship", router);
};
