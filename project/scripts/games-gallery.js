import { games } from './data.js';
import { createCard } from './components.js';

document.addEventListener("DOMContentLoaded", () => {
    const gameGallery = document.querySelector(".section-game-gallery .gallery-grid");
    if (gameGallery) {
        games.forEach(game => {
            gameGallery.innerHTML += createCard(game);
        });
    }
});