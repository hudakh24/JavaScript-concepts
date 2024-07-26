const arrow = () => {
  return true;
};

const arrays = [1, "one", true, null, undefined, [1, 2], { age: 20 }, arrow];
console.log(arrays[7]()); //if no round bracked then no balue returned.
console.log(arrays[6].age);
console.log("---------------------------");

// methods off arry classes
//push
arrays.push("new value");
console.log(arrays);
console.log("---------------------------");

//pop
arrays.pop();
console.log(arrays);
console.log("---------------------------");

//unshift
arrays.unshift("extra");
console.log(arrays);
console.log("---------------------------");

//shift
arrays.shift();
console.log(arrays);
console.log("---------------------------");

//includes
console.log(arrays.includes("one"));
console.log("---------------------------");

//index of
console.log(arrays.indexOf("two")); //if found return 1 if not found then -1
console.log("---------------------------");

//we can add value at any index of array
arrays[10] = "new";
console.log(arrays);
console.log("---------------------------");

// we can find value in array and can update new value using ternery operator not if condition
arrays[arrays.indexOf("one") > -1 ? arrays.indexOf("one") : arrays.length] = 1;
console.log(arrays);
console.log("---------------------------");

// with Object find value with refrence for array [1,2] in array
console.log(arrays[5].includes(1));
