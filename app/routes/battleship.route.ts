import { Application, Router } from "express";
import * as battleshipGameController from "../controllers/battleshipGameController";

export default (app: Application): void => {
  const router: Router = Router();

  router.post("/start", battleshipGameController.startGame);

  app.use("/api/battleship", router);
};
