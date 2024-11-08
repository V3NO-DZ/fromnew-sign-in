// Select the form element from the DOM
const form = document.querySelector("form");

// Select the two card elements that will be toggled
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");

// Add an event listener to the form to listen for submit events
form.addEventListener("submit", (e) => {
    // Prevent the form's default submission behavior
    e.preventDefault();
    
    // Hide the first card by adding the "hide" class
    card_1.classList.add("hide");
    
    // Show the second card by removing the "hide" class
    card_2.classList.remove("hide");
});
