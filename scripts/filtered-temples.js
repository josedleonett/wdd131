const menuButton = document.getElementById("menuButton");
const menuNavigation = document.getElementById("menuNavigation");

function toggleMenu(button, navigation) {
    navigation.classList.toggle("hidden");

    if (navigation.classList.contains("hidden")) {
        button.textContent = "☰";
    } else {
        button.textContent = "✖";
    }
}

menuButton.addEventListener("click", () => {
    toggleMenu(menuButton, menuNavigation);
});

const currentYearElement = document.getElementById('currentyear');
const currenYear = new Date().getFullYear();
currentYearElement.innerHTML = currenYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "August 7, 2005",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "May 21, 1888",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "June 7, 2015",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "May 2, 2020",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "November 19, 1974",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "January 10, 1986",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "December 2, 1983",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "January 17, 1986",
        area: 11642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-12546.jpg"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "August 20, 2000",
        area: 10500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55705.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "January 8, 1995",
        area: 104000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-35436.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "June 15, 2000",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359.jpg"
    },
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "March 5, 2000",
        area: 34500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-3429.jpg"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa, Peru",
        dedicated: "December 15, 2019",
        area: 28000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186.jpg"
    },
    {
        templeName: "Billings Montana",
        location: "Billings, Montana, United States",
        dedicated: "November 20, 1999",
        area: 33700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-2799.jpg"
    },
    {
        templeName: "Boston Massachusetts",
        location: "Boston, Massachusetts, United States",
        dedicated: "October 1, 2000",
        area: 69700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9928.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "September 23, 2012",
        area: 36000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-55256.jpg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "May 17, 2015",
        area: 34100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-15735.jpg"
    }
];

const templeGallery = document.getElementById("templeGalleryContainer");

function orderTemplesByArea(templesList, order) {
    return templesList.sort((a, b) => {
        if (order === "asc") {
            return a.area - b.area;
        } else if (order === "desc") {
            return b.area - a.area;
        }
        return 0; // No sorting if order is invalid
    });
}

function filterTemplesByArea(templesList, minArea, maxArea) {
    return templesList.filter(temple => temple.area >= minArea && temple.area <= maxArea);
}

function filterTemplesByDedicationDate(templesList, startDate, endDate) {
    startDate = new Date(startDate, 0, 1);
    endDate = new Date(endDate, 0, 1);

    return templesList.filter(temple => {
        const templeDate = new Date(temple.dedicated);
        return templeDate >= startDate && templeDate <= endDate;
    });
}

function renderTempleGallery(templesToDisplay) {
    templeGallery.innerHTML = "";
    templesToDisplay.forEach(temple => {
        const templeGalleryCard = document.createElement("figure");
        templeGalleryCard.classList.add("templeGalleryCard");
        templeGalleryCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="auto" height="250">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <dl>
                    <dt>Location:</dt>
                    <dd>${temple.location}</dd>
                    <dt>Dedicated:</dt>
                    <dd>${temple.dedicated}</dd>
                    <dt>Size:</dt>
                    <dd>${temple.area} sq ft</dd>
                </dl>
            </figcaption>`;
        
        templeGallery.appendChild(templeGalleryCard);
    });
}

renderTempleGallery(temples);

const oldTemples = 1900;
const newTemples = 2000;
const largestTempleArea = 90000;
const smallestTempleArea = 10000;

const homeAnchorElement = document.getElementById("filter-home-anchor");
const oldTemplesAnchorElement = document.getElementById("filter-old-temples-anchor");
const newTemplesAnchorElement = document.getElementById("filter-new-temples-anchor");
const largeTempleAnchorElement = document.getElementById("filter-large-temples-anchor");
const smallTempleAnchorElement = document.getElementById("filter-small-temples-anchor");

homeAnchorElement.addEventListener("click", () => {
    renderTempleGallery(temples);
    toggleMenu(menuButton, menuNavigation);
});

oldTemplesAnchorElement.addEventListener("click", () => {
    const filteredTemples = filterTemplesByDedicationDate(temples, oldTemples, newTemples);
    renderTempleGallery(filteredTemples);
    toggleMenu(menuButton, menuNavigation);
});

newTemplesAnchorElement.addEventListener("click", () => {
    const filteredTemples = filterTemplesByDedicationDate(temples, newTemples, currenYear);
    renderTempleGallery(filteredTemples);
    toggleMenu(menuButton, menuNavigation);
});

largeTempleAnchorElement.addEventListener("click", () => {
    const filteredTemples = filterTemplesByArea(temples, largestTempleArea, Infinity);
    renderTempleGallery(filteredTemples);
    toggleMenu(menuButton, menuNavigation);
});

smallTempleAnchorElement.addEventListener("click", () => {
    const filteredTemples = filterTemplesByArea(temples, 0, smallestTempleArea);
    renderTempleGallery(filteredTemples);  
    toggleMenu(menuButton, menuNavigation);
});

