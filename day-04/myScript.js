//ASSIGNMENT/TASK ONE

// ANSWER: console.log() would be It's a normal day. I chose that answer simple because the string variable does not account for
// case insensitivity that is to ignore the letter casing. The variable day value start with a capital letter M for Monday while
// the case value start with m for monday which are not the case because of javascript case sensitivity.

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log(`It's a normal day.`);
}

//ASSIGNMENT/TASK TWO

let amount = 400;

if (amount % 100 === 0) {
  console.log("Withdrawal Successful");
} else {
  console.log("Invalid amount");
}

//ASSIGNMENT/TASK THREE

let num1 = 20;
let num2 = 5;
let operator = "*";

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`Result: ${num1} + ${num2} = ${result}`);
    break;

  case "-":
    result = num1 - num2;
    console.log(`Result: ${num1} - ${num2} = ${result}`);
    break;

  case "*":
    result = num1 * num2;
    console.log(`Result: ${num1} * ${num2} = ${result}`);
    break;

  case "/":
    result = num1 / num2;
    console.log(`Result: ${num1} / ${num2} = ${result}`);
    break;

  case "%":
    result = num1 % num2;
    console.log(`Result: ${num1} % ${num2} = ${result}`);
    break;

  default:
    console.log("Invalid operator! Please use +, -, *, /, or %");
}

//ASSIGNMENT/TASK FOUR

let age = 45;

if (age < 18) {
  console.log(`Ticket Price: $3`);
} else if (age <= 60) {
  console.log(`Ticket Price: $10`);
} else if (age > 60) {
  console.log(`Ticket Price: $8`);
} else {
  console.log("Invalid age entered");
}

// let ageBracket = 45;
// if (ageBracket < 18) {
//   console.log("Ticket Price: $3 (Children)");
// } else if (ageBracket >= 18 && ageBracket <= 60) {
//   console.log("Ticket Price: $10 (Adult)");
// } else if (ageBracket > 60) {
//   console.log("Ticket Price: $8 (Senior)");
// } else {
//   console.log("Invalid age entered");
// }

//ASSIGNMENT/TASK FIVE

let month = "December";

switch (month) {
  case "January":
    console.log(`Capricorn / Aquarius`);
    break;

  case "February":
    console.log(`Aquarius / Pisces`);
    break;

  case "March":
    console.log(`Pisces / Aries`);
    break;

    case "April":
    console.log(`Aries / Taurus`);
    break;

    case "May":
    console.log(`aurus / Gemini`);
    break;

    case "June":
    console.log(`Gemini / Cancer`);
    break;

    case "July":
    console.log(`Cancer / Leo`);
    break;

    case "August":
    console.log(`Leo / Virgo`);
    break;

    case "September":
    console.log(`Virgo / Libra`);
    break;

    case "October":
    console.log(`Libra / Scorpio`);
    break;

    case "November":
    console.log(`Scorpio / Sagittarius`);
    break;

    case "December":
    console.log(`Sagittarius / Capricorn`);
    break;

    default:
    console.log("Invalid operator! Please use a valid month");
}


//ASSIGNMENT/TASK SIX

let side1 = 5;
let side2 = 7;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
