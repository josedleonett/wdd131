const currentYearElement = document.getElementById('currentyear');
const currenYear = new Date().getFullYear();
currentYearElement.innerHTML = currenYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
  
const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
    productSelect.appendChild(option);
});

const form = document.querySelector("form");
const reviewCount = localStorage.getItem("reviewCount") || 0;
const reviewCountElement = document.getElementById("reviewCount");
reviewCountElement.innerHTML = reviewCount;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedProductId = productSelect.value;
  const selectedProduct = products.find(product => product.id === selectedProductId);

  if (selectedProduct) {
      let count = parseInt(localStorage.getItem("reviewCount")) || 0;
      count++;
      localStorage.setItem("reviewCount", count);

      window.location.href = "review.html?productName=" + encodeURIComponent(selectedProduct.name);
  } else {
      alert("Please select a product.");
  }
});




