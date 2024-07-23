//function decleartion
function evenOdd(P1, P2) {
  console.log("p1->", P1);
  console.log("p2->", P2);
}

console.log(evenOdd(2, 4)); //console.log undefined if no return value

//function expression
const palindrome = function (P1, P2) {
  console.log("p1->", P1);
  console.log("p2->", P2);
  return true;
};

console.log(palindrome(1, 2));

const ref = evenOdd;
console.log(ref(6, 4));
ref(7, 9); //will nor expect return value from here

//Arrow function
function evenOdd_2(
  P1 = 7,
  P2 = ((params) => {
    console.log("IIFE", params);
    return 1;
  })("params value")
) {
  P1 % 2 == 0 ? console.log(`${P1} -> even`) : console.log(`${P1} -> odd`);
  P2 % 2 == 0 ? console.log(`${P2} -> even`) : console.log(`${P2} -> odd`);
}

evenOdd_2();
