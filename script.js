function determineTicketPrice() {
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    let ticketPrice;

    if (isNaN(age)) {
        document.getElementById('result').innerText = "Please enter a valid number for your age.";
        return;
    }

    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else if (age >= 18) {
        ticketPrice = 20;
    } else {
        document.getElementById('result').innerText = "Invalid age entered.";
        return;
    }

    document.getElementById('result').innerText = `The price of a movie ticket for your age is: $${ticketPrice}`;
} 