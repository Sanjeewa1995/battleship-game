# Battleship Game

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a MySQL database named `battleship_game`.
4. Run sql query for create tables inside in sql folder 
5. Configure database connection in `config/config.json`.
6. Build the dist files with `npm run build`.
7. Start the server with `npm start`.
8. Run unit test with `npm run test`

## API Endpoints
- `POST /game/start`: Create a new game.
- `POST /ship/place`: Place a ship on the grid manually.
- `POST /game/hit`: Record a player move.
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
