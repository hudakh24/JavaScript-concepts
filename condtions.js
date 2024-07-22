//simple if
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

//Multiple ifs
let temperature = 35;

if (temperature > 80) {
  console.log("It's hot outside.");
}
if (temperature < 60) {
  console.log("It's cold outside.");
}
if (temperature >= 60 && temperature <= 80) {
  console.log("The weather is just right.");
}

//else if-else condition
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//ternary
let isMember = true;
let discount = isMember ? "20%" : "5%";
console.log(`Discount: ${discount}`);
