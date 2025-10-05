//ASSIGNMENT/TASK ONE

let parityNum = 8;

let parityResult = parityNum % 2 === 0 ? "Even" : "Odd";

console.log(parityResult);


//ASSIGNMENT/TASK TWO

let age = 18;

let legalAge = age >= 18 ? "Eligible to Drive" : "Not Eligible to Drive";

console.log(legalAge);

//ASSIGNMENT/TASK THREE

let montlySalary = 12300;

let annualSalary = montlySalary * 12;

let annualBonus = 0.20 * annualSalary;

let ctcAnnualSalary = annualSalary + annualBonus;

console.log(ctcAnnualSalary);

//ASSIGNMENT/TASK FOUR

let color = "Red";

let trafficIndicator = color === "Red" ? "STOP" : "GO";

console.log(trafficIndicator);

//ASSIGNMENT/TASK FIVE

let units = 150;

let unitsPerMonth = units * 30;

let unitsPerYear = unitsPerMonth * 12;

let discounterUPY = 0.8 * unitsPerYear;

console.log(discounterUPY);

//ASSIGNMENT/TASK SIX

let year = 2030;

let leapYearChecker = (year % 400 === 0 || year % 4 === 0) && year % 100 !== 0 ? `Its a leap year` : `Its not a leap year`;

console.log(leapYearChecker);

//ASSIGNMENT/TASK SEVEN

let p = 11;
let q = 12;
let r = 13;

let maxNumber =
  (p > q && p > r) ? "p is the max" :
  (q > p && q > r) ? "q is the max" :
  "r is the max";

console.log(maxNumber);

//ASSIGNMENT/TASK EIGHT

let count = 5;
count = count << 1; 
console.log(count);

