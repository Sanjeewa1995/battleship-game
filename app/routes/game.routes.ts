import { Application, Router } from "express";
import * as battleshipGameController from "../controllers/gameController";

export default (app: Application): void => {
  const router: Router = Router();

  router.post("/start", battleshipGameController.startGame);
  router.get("/:gameId/status", battleshipGameController.getStatus);

  app.use("/api/game", router);
};
