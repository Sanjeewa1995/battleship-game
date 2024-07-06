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
        gameId INT NOT NULL,
        type VARCHAR(50) NOT NULL,
        position TEXT NOT NULL,
        size INT NOT NULL,
        FOREIGN KEY (gameId) REFERENCES games (id) ON DELETE CASCADE
    );