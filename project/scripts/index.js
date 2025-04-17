import { characters, consoles } from './data.js';
import { createCard } from './components.js';

document.addEventListener("DOMContentLoaded", () => {
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
});