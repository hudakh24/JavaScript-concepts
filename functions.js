function evenOdd(P1, P2) {
  console.log("p1->", P1);
  console.log("p2->", P2);
}

console.log(evenOdd(2, 4)); //console.log undefined if no return value

const palindrome = function (P1, P2) {
  console.log("p1->", P1);
  console.log("p2->", P2);
  return true;
};

console.log(palindrome(1, 2));

const ref = evenOdd;
console.log(ref(6, 4));
ref(7, 9); //will nor expect return value from here
