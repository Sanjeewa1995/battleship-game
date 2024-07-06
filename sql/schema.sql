CREATE DATABASE battleships;

USE battleships;

CREATE TABLE
    games (
        id INT AUTO_INCREMENT PRIMARY KEY,
        player_id VARCHAR(255) NOT NULL,
        status ENUM ('IN_PROGRESS', 'FINISHED') DEFAULT 'IN_PROGRESS',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    ships (
        id INT AUTO_INCREMENT PRIMARY KEY,
        game_id INT,
        type ENUM ('BATTLESHIP', 'DESTROYER'),
        size INT,
        coordinates JSON,
        hits INT DEFAULT 0,
        FOREIGN KEY (game_id) REFERENCES games (id)
    );