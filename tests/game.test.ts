import request from "supertest";
import app from "../app/app";

describe("Battleship API", () => {
  it("should start a new game", async () => {
    const response = await request(app)
      .post("/api/game/start")
      .send({ playerId: "player1" });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it("should place a ship", async () => {
    const gameResponse = await request(app)
      .post("/game/start")
      .send({ playerId: "player1" });

    const { gameId } = gameResponse.body;

    const response = await request(app)
      .post("/ship/place")
      .send({
        gameId,
        type: "BATTLESHIP",
        size: 5,
        coordinates: ["A1", "A2", "A3", "A4", "A5"],
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it("should process an attack", async () => {
    const gameResponse = await request(app)
      .post("/game/start")
      .send({ playerId: "player1" });

    const { gameId } = gameResponse.body;

    await request(app)
      .post("/ship/place")
      .send({
        gameId,
        type: "BATTLESHIP",
        size: 5,
        coordinates: ["A1", "A2", "A3", "A4", "A5"],
      });

    const attackResponse = await request(app)
      .post("/game/attack")
      .send({ gameId, coordinate: "A1" });

    expect(attackResponse.status).toBe(200);
    expect(attackResponse.body.success).toBe(true);
    expect(attackResponse.body.result).toBe("Hit");
  });

  it("should get the game status", async () => {
    const gameResponse = await request(app)
      .post("/game/start")
      .send({ playerId: "player1" });

    const { gameId } = gameResponse.body;

    await request(app)
      .post("/game/place")
      .send({
        gameId,
        type: "BATTLESHIP",
        size: 5,
        coordinates: ["A1", "A2", "A3", "A4", "A5"],
      });

    const statusResponse = await request(app)
      .get("/game/status")
      .query({ gameId });

    expect(statusResponse.status).toBe(200);
    expect(statusResponse.body.success).toBe(true);
  });
});
