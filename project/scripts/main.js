import { characters, consoles, games } from './data.js';
import { createCard } from './components.js';

function initHomePage() {
    const characterGallery = document.querySelector(".section-character-gallery .gallery-grid");
    if (characterGallery) {
        characters.forEach(character => {
            characterGallery.innerHTML += createCard(character);
        });
    }

    const consoleGallery = document.querySelector(".section-console-gallery .gallery-grid");
    if (consoleGallery) {
        consoles.forEach(console => {
            consoleGallery.innerHTML += createCard(console);
        });
    }
}

function initGamesGallery() {
    const gameGallery = document.querySelector(".section-game-gallery .gallery-grid");
    if (gameGallery) {
        games.forEach(game => {
            gameGallery.innerHTML += createCard(game);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes("index.html") || currentPath.endsWith("/")) {
        initHomePage();
    }
    
    if (currentPath.includes("games-gallery.html")) {
        initGamesGallery();
    }
});