// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// SWAP THE VALUE OF TWO VARIABLES
console.log("--------- EXAMPLE 1 ---------");
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// SWAP 2 ELEMENTS IN AN ARRAY
console.log("\n--------- EXAMPLE 2 ---------");
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ASSIGN ARRAY ELEMENTS TO VARIABLES
console.log("\n--------- EXAMPLE 3---------");
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXTRACT VALUES FROM OBJECTS
console.log("\n--------- EXAMPLE 4 ---------");
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "Unemployed" } = person2; //set default object value for key job
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// DESTRUCTURING IN FUNCTION PARAMETERS
console.log("\n--------- EXAMPLE 5 ---------");
function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
