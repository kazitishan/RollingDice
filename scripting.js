function rollDie(){
    // generating a random number between 1 and 6 for both die
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // calculating the sum of the numbers
    let sum = die1 + die2;

    // making the phrases that get displayed to the user
    const phrase1 = document.createElement("p");
    const phrase2 = document.createElement("p");
    const total = document.createElement("p");
    phrase1.textContent = "Die 1: " + die1;
    phrase2.textContent = "Die 2: " + die2;
    total.textContent = "Sum: " + sum;

    // doing this so that I can make the sum appear green
    total.classList.add("total");

    // adding the phrases to the page
    document.body.appendChild(phrase1);
    document.body.appendChild(phrase2);
    document.body.appendChild(total);
}

// when the button is clicked
const button = document.querySelector("button");
button.addEventListener("click", rollDie)