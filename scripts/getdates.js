const currentYearElement = document.getElementById('currentyear');
const currenYear = new Date().getFullYear();
currentYearElement.innerHTML = currenYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = lastModified;