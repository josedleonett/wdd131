import { createCard } from './components.js';
import { games, characters, consoles } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    displayFavorites();
});

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const gamesFavorites = games.filter(game => 
        favorites.includes(game.title.replace(/\s+/g, '-').toLowerCase())
    );
    
    const charactersFavorites = characters.filter(character => 
        favorites.includes(character.title.replace(/\s+/g, '-').toLowerCase())
    );
    
    const consolesFavorites = consoles.filter(console => 
        favorites.includes(console.title.replace(/\s+/g, '-').toLowerCase())
    );
    
    if (favorites.length === 0) {
        document.getElementById('games-favorites').style.display = 'none';
        document.getElementById('characters-favorites').style.display = 'none';
        document.getElementById('consoles-favorites').style.display = 'none';
        document.getElementById('no-favorites').style.display = 'block';
        return;
    } else {
        document.getElementById('no-favorites').style.display = 'none';
    }
    
    const gamesContainer = document.querySelector('#games-favorites .gallery-grid');
    if (gamesFavorites.length > 0) {
        gamesContainer.innerHTML = gamesFavorites.map(game => createCard(game)).join('');
        document.getElementById('games-favorites').style.display = 'block';
    } else {
        document.getElementById('games-favorites').style.display = 'none';
    }
    
    const charactersContainer = document.querySelector('#characters-favorites .gallery-grid');
    if (charactersFavorites.length > 0) {
        charactersContainer.innerHTML = charactersFavorites.map(character => createCard(character)).join('');
        document.getElementById('characters-favorites').style.display = 'block';
    } else {
        document.getElementById('characters-favorites').style.display = 'none';
    }
    
    const consolesContainer = document.querySelector('#consoles-favorites .gallery-grid');
    if (consolesFavorites.length > 0) {
        consolesContainer.innerHTML = consolesFavorites.map(console => createCard(console)).join('');
        document.getElementById('consoles-favorites').style.display = 'block';
    } else {
        document.getElementById('consoles-favorites').style.display = 'none';
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const newFavorite = urlParams.get('new');
    
    if (newFavorite) {
        const newCard = document.querySelector(`[data-id="${newFavorite}"]`).closest('.card');
        if (newCard) {
            newCard.classList.add('highlight-favorite');
            
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}

document.addEventListener('click', function(event) {
    if (event.target.closest('.favorite-btn')) {
        setTimeout(displayFavorites, 100);
    }
});