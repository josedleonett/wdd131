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

const sessionKey = window.location.href;

if (!localStorage.getItem(`reviewProcessed_${sessionKey}`)) {
  const totalReviews = localStorage.getItem("totalReviews") || 0;
  localStorage.setItem("totalReviews", parseInt(totalReviews) + 1);

  localStorage.setItem(`reviewProcessed_${sessionKey}`, "true");
}

const totalReviewsElement = document.getElementById("totalReviews");
if (totalReviewsElement) {
  totalReviewsElement.textContent = localStorage.getItem("totalReviews");
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productName");
const overallRating = urlParams.get("stars");
const dateOfInstallation = urlParams.get("date");
const usefulFeatures = [
  urlParams.get("durability"),
  urlParams.get("ease-of-use"),
  urlParams.get("perfomance"),
  urlParams.get("design"),
].filter(Boolean).join(", ");
const writtenReview = urlParams.get("review") || "No review provided.";
const yourName = urlParams.get("name") || "Anonymous";

const selectedProduct = products.find(product => product.id === productId);
const productName = selectedProduct ? selectedProduct.name : "Unknown Product";

document.getElementById("productName").textContent = productName.charAt(0).toUpperCase() + productName.slice(1);

const overallRatingElement = document.getElementById("overallRating");
if (overallRatingElement && overallRating) {
  const stars = "★".repeat(overallRating) + "☆".repeat(5 - overallRating);
  overallRatingElement.textContent = stars;
} else {
  overallRatingElement.textContent = "No rating provided.";
}

document.getElementById("dateOfInstallation").textContent = dateOfInstallation || "No date provided.";
document.getElementById("usefulFeatures").textContent = usefulFeatures || "No features selected.";
document.getElementById("writtenReview").textContent = writtenReview;
document.getElementById("yourName").textContent = yourName;

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("reviewProcessed");
});
