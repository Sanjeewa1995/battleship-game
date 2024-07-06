# Battleship Game

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a MySQL database named `battleship_game`.
4. Configure database connection in `config/config.json`.
6. Start the server with `npm start`.

## API Endpoints
- `POST /game`: Create a new game.
- `POST /game/:gameId/ship`: Place a ship on the grid manually.
- `POST /game/:gameId/move`: Record a player move.
- `GET /game/:gameId/status`: Get the current status of the game.

## Unit Test
1. Run unit test with `npm run test`

## Example Requests
- **Create a new game**:
  ```json
  POST /game
  {
    "player": "Player1"
  }
