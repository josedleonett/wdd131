function createCard({ title, image, description, ...rest }) {
    const isGame = rest.developer && rest.genre;
    const isCharacter = rest.firstGame !== undefined;
    const isConsole = !isGame && !isCharacter;
    const cardId = title.replace(/\s+/g, '-').toLowerCase();
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.includes(cardId);
    
    const favoriteButton = `
        <button class="favorite-btn" data-id="${cardId}">
            <i class="fas fa-${isFavorite ? 'star' : 'star-o'}"></i>
        </button>
    `;
    
    // Determine card class
    const cardClass = isGame ? 'card-game' : (isCharacter ? 'card-character' : 'card-console');
    
    return `
        <div class="card ${cardClass}">
            <div class="${cardClass}-image-container">
                <img src="${image}" alt="${title}" class="card-image" loading="lazy">
            </div>
            <div class="${cardClass}-content">
                <h3 class="card-title">${title}</h3>
                <p class="card-description">${description}</p>
                <div class="card-details-container">
                    ${isGame ? `
                        ${rest.releaseYear ? `<p class="card-details"><strong>Release Year:</strong> ${rest.releaseYear}</p>` : ""}
                        ${rest.developer ? `<p class="card-details"><strong>Developer:</strong> ${rest.developer}</p>` : ""}
                        ${rest.genre ? `<p class="card-details"><strong>Genre:</strong> ${rest.genre}</p>` : ""}
                        ${rest.characters && rest.characters.length > 0 ? `<p class="card-details"><strong>Notable Characters:</strong> ${rest.characters.join(', ')}</p>` : ""}
                        ${rest.platforms && rest.platforms.length > 0 ? `<p class="card-details"><strong>Platforms:</strong> ${rest.platforms.join(', ')}</p>` : ""}
                    ` : isCharacter ? `
                        ${rest.firstGame ? `<p class="card-details"><strong>First Appearance:</strong> ${rest.firstGame}</p>` : ""}
                    ` : `
                        ${rest.releaseYear ? `<p class="card-details"><strong>Release Year:</strong> ${rest.releaseYear}</p>` : ""}
                        ${rest.manufacturer ? `<p class="card-details"><strong>Manufacturer:</strong> ${rest.manufacturer}</p>` : ""}
                        ${rest.bestSellingGame ? `<p class="card-details"><strong>Best-Selling Game:</strong> ${rest.bestSellingGame}</p>` : ""}
                    `}
                </div>
                ${favoriteButton}
            </div>
        </div>
    `;
}

function createHeader() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    return `
    <div class="header-logo">
        <img src="images/assets/1up-logo.png" alt="+1up Logo" class="logo-image" loading="lazy">
    </div>
    <nav class="header-nav" aria-label="Main Navigation">
        <ul class="nav-list">
            <li class="nav-item"><a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
            <li class="nav-item"><a href="games-gallery.html" class="nav-link ${currentPage === 'games-gallery.html' ? 'active' : ''}">Games Gallery</a></li>
            <li class="nav-item"><a href="index.html#section-consoles" class="nav-link">Console Gallery</a></li>
            <li class="nav-item"><a href="favorites.html" class="nav-link ${currentPage === 'favorites.html' ? 'active' : ''}">Favorites</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
    </nav>
    `;
}

function createFooter() {
    return `
    <div class="footer-content">
        <ul class="social-links" aria-label="Social Media Links">
            <li class="social-item">
                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li class="social-item">
                <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li class="social-item">
                <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
        <nav class="footer-nav" aria-label="Footer Navigation">
            <ul class="footer-nav-list">
                <li class="footer-nav-item"><a href="index.html">Home</a></li>
                <li class="footer-nav-item"><a href="games-gallery.html">Games Gallery</a></li>
                <li class="footer-nav-item"><a href="index.html#section-consoles">Console Gallery</a></li>
                <li class="footer-nav-item"><a href="favorites.html">Favorites</a></li>
                <li class="footer-nav-item"><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="footer-credits">
        <p>&copy; 2025 +1up. All rights reserved.</p>
        <p>Designed by Jose D. Leonett</p>
    </div>
    `;
}

function initializeComponents() {
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    
    if (headerElement) {
        headerElement.innerHTML = createHeader();
    }
    
    if (footerElement) {
        footerElement.innerHTML = createFooter();
    }
}

document.addEventListener('DOMContentLoaded', initializeComponents);

document.addEventListener('click', function(event) {
    if (event.target.closest('.favorite-btn')) {
        const button = event.target.closest('.favorite-btn');
        const itemId = button.dataset.id;
        
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        const index = favorites.indexOf(itemId);
        if (index > -1) {
            favorites.splice(index, 1);
            button.querySelector('i').classList.replace('fa-star', 'fa-star-o');
        } else {
            favorites.push(itemId);
            button.querySelector('i').classList.replace('fa-star-o', 'fa-star');
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
});

export { createCard, createHeader, createFooter };