//type conversion

let str = "123.45"; //string to number
let intNum = parseInt(str);
let floatNum = parseFloat(str);
console.log(intNum, floatNum);

let num = 123;
let str1 = String(num); // Converts number  to string
console.log(str1);

let bool = true;
let number1 = Number(bool); // Converts boolean to number
console.log(number1); // 1

//primirive datatypes
// 1. Number
let num1 = 42; // integer
let num2 = 3.14; // floating-point number
console.log(`Number Examples: num1 = ${num1}, num2 = ${num2}`);

// 2. String
let str_1 = "Hello, world!";
console.log(`String Examples: str1 = "${str1_1}"`);

// 3. Boolean
let True_bool = true;
let False_bool = false;
console.log(
  `Boolean Examples: True_bool= ${True_bool}, False_bool = ${False_bool}`
);

// 4. Undefined
let undefinedVar;
console.log(`Undefined Example: undefinedVar = ${undefinedVar}`);

// 5. Null
let nullVar = null;
console.log(`Null Example: nullVar = ${nullVar}`);

// 6. Symbol
let sym1 = Symbol("unique1");
let sym2 = Symbol("unique2");
console.log(
  `Symbol Examples: sym1 = ${sym1.toString()}, sym2 = ${sym2.toString()}`
);

// 7. BigInt
let bigInt1 = 123456789012345678901234567890n; // Note the 'n' at the end
console.log(`BigInt Example: bigInt1 = ${bigInt1}`);
