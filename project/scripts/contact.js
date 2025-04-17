document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            console.log("Form submitted");
            
            alert("Thanks!");
        });
    }
});