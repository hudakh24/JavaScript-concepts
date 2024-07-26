// REST OPERATOR:
//  -> Rest operator is used in array or object destructuring
//  -> and handling variable lengths parameter is functions

// 1- Incase of Array
const array = [1, 2, 3, 4, 5];

const [a, b, ...c] = array;
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log(
  "------------------------------------------------------------------"
);

// 2- In Case of Object
const person = {
  id: "1234",
  "Full Name": "Huda",
  age: 20,
  dob: 2004,
};
const { id, ...user } = person;
console.log(id);
console.log(user);
console.log(
  "------------------------------------------------------------------"
);

// 3- In case of Function -> rest operator is used in paramter
const check = ({ id, ...user }, array) => {
  console.log(id);
  console.log(user);
  console.log(array);
};
check(person, array);
console.log(
  "------------------------------------------------------------------"
);

// SPREAD OPERATOR
// 1- Incase of Array : Used to make deep copy
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const temparray = [...array2];
temparray[0] = "newValue";
console.log("array1=", array2);
console.log("array2=", temparray);
console.log(
  "------------------------------------------------------------------"
);

// 2- Incase of Objects : Used to make deep copy
const newObj = { ...person };
newObj.age = 26;
newObj["Full Name"] = "Saba";
newObj.city = "Lahore";
console.log("Person Obeject:\n", person);
console.log("NewObj:\n", newObj);
console.log(
  "------------------------------------------------------------------"
);

// 3- Incase of Function : always used in arguments
const main = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

main(...array2);
