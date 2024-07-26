// objects
const Details = {
  name: "Huda",
  age: 20,
  geder: "f",
  adress: {
    city: "lahore",
  },
  array: [
    function () {
      return "array function";
    },
    7,
    2,
  ],
  sayHellow: function () {
    return "hello";
  },
};

console.log(Details.adress.city); //to access lahore
console.log(Details.array[0]()); // to access array function
console.log(Details.array[1]); // to access 7 in an array key
console.log(Details.sayHellow()); // to access hello in sayhello
console.log("---------------------------");

//object array
const Person1 = {
  name: "Huda",
  age: 24,
};

const Person2 = {
  name: "Subata",
  age: 25,
};

const Person3 = {
  name: "Ahad",
  age: 21,
};

const followers = [Person1, Person2, Person3];
console.log(followers);
console.log("---------------------------");
console.log(followers[0]);
console.log("---------------------------");
console.log(followers[0].name);
console.log("---------------------------");

//object Methods
console.log(Object.keys(Person1)); // 1.Keys
console.log(Object.values(Person1)); // 2.Values
console.log(Object.entries(Person1)); //3.entries
