function createCard({ title, image, description, firstGame, releaseYear, developer, genre, manufacturer, bestSellingGame, characters, platforms }) {
    const isGame = developer && genre;
    
    if (isGame) {
        return `
            <div class="card card-game">
                <div class="card-game-image-container">
                    <img src="${image}" alt="${title}" class="card-image" loading="lazy">
                </div>
                <div class="card-game-content">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-description">${description}</p>
                    <div class="card-details-container">
                        ${releaseYear ? `<p class="card-details"><strong>Release Year:</strong> ${releaseYear}</p>` : ""}
                        ${developer ? `<p class="card-details"><strong>Developer:</strong> ${developer}</p>` : ""}
                        ${genre ? `<p class="card-details"><strong>Genre:</strong> ${genre}</p>` : ""}
                        ${characters && characters.length > 0 ? `<p class="card-details"><strong>Notable Characters:</strong> ${characters.join(', ')}</p>` : ""}
                        ${platforms && platforms.length > 0 ? `<p class="card-details"><strong>Platforms:</strong> ${platforms.join(', ')}</p>` : ""}
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="card">
                <img src="${image}" alt="${title}" class="card-image" loading="lazy">
                <h3 class="card-title">${title}</h3>
                <p class="card-description">${description}</p>
                ${firstGame ? `<p class="card-details"><strong>First Appearance:</strong> ${firstGame}</p>` : ""}
                ${releaseYear ? `<p class="card-details"><strong>Release Year:</strong> ${releaseYear}</p>` : ""}
                ${manufacturer ? `<p class="card-details"><strong>Manufacturer:</strong> ${manufacturer}</p>` : ""}
                ${bestSellingGame ? `<p class="card-details"><strong>Best-Selling Game:</strong> ${bestSellingGame}</p>` : ""}
            </div>
        `;
    }
}

export { createCard };