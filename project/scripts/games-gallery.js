import { games } from './data.js';
import { createCard } from './components.js';

document.addEventListener("DOMContentLoaded", () => {
    const gameGallery = document.querySelector(".section-game-gallery .gallery-grid");
    if (gameGallery) {
        games.forEach(game => {
            const cardHTML = createCard(game);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cardHTML;
            const cardImage = tempDiv.querySelector('.card-image');
            if (cardImage) {
                cardImage.setAttribute('width', '220');
                cardImage.setAttribute('height', '220');
            }
            gameGallery.innerHTML += tempDiv.innerHTML;
        });
    }
});