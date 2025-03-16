const menuButton = document.getElementById("menuButton");
const menuNavigation = document.getElementById("menuNavigation");

menuButton.addEventListener("click", () => {
    menuNavigation.classList.toggle("hidden");

    if (menuNavigation.classList.contains("hidden")) {
        menuButton.textContent = "☰";
    } else {
        menuButton.textContent = "✖";
    }
});

const currentYearElement = document.getElementById('currentyear');
const currenYear = new Date().getFullYear();
currentYearElement.innerHTML = currenYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = lastModified;