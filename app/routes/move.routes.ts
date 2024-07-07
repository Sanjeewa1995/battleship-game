import { Application, Router } from "express";
import * as moveController from "../controllers/moveController";

export default (app: Application): void => {
  const router: Router = Router();

  router.post("/shot", moveController.makeMove);

  app.use("/api/move", router);
};
