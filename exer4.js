// Exercise # 4.1


let isHot = true; // Step 1

console.log("The value of the variable is: " + isHot); // Step 2

if (isHot) { // Step 3
    console.log("It is a hot day.");
}

if (!isHot) { // Step 4
    console.log("It is not a hot day.");
}

// Exercise # 4.2


const userAge = prompt("Please enter your age:");

const age = parseInt;

let message;

if (age >= 18) {
    message = "You are eligible for CNIC";
} else if (age <= 17) {
    message = "You are not eligible for CNIC";
} else {
    message = "Invalid age input";
}

console.log(message);

// Practice exercise 4.3

const isIDValid = true; 


const variable = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";

console.log(variable);

// Practice exercise 4.4


const randomValue = Math.floor(Math.random() * 6);

const userQuestion = prompt("Ask the Magic 8-Ball a yes or no question:");


let response;
switch (randomValue) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "It is decidedly so.";
    break;
  case 2:
    response = "Without a doubt.";
    break;
  case 3:
    response = "Reply hazy, try again.";
    break;
  case 4:
    response = "Don't count on it.";
    break;
  case 5:
    response = "Outlook not so good.";
    break;
  default:
    response = "Sorry, the Magic 8-Ball is confused.";
    break;
}

const finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

console.log(finalResponse);



// Practice exercise 4.5

let prize = prompt("Select a number between 0 and 10 to win a prize:");

prize = parseInt(prize);


let outputMessage = "My Selection: ";


let prizeName = "";
switch (prize) {
  case 0:
    prizeName = "Sorry, no prize for 0.";
    break;
  case 1:
    prizeName = "Congratulations! You've won a free coffee!";
    break;
  case 2:
    prizeName = "Congratulations! You've won a movie ticket!";
    break;
  case 3:
    prizeName = "Congratulations! You've won a gift card!";
    break;
  case 4:
  case 5:
    prizeName = "Congratulations! You've won a T-shirt!";
    break;
  case 6:
  case 7:
  case 8:
    prizeName = "Congratulations! You've won a discount coupon!";
    break;
  case 9:
    prizeName = "Congratulations! You've won a weekend getaway!";
    break;
  case 10:
    prizeName = "Congratulations! You've won a new car!";
    break;
  default:
    prizeName = "Invalid selection. Please choose a number between 0 and 10.";
    break;
}

console.log(outputMessage + prizeName);
