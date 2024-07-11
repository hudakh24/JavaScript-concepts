//constant

const a = 1;
console.log("a before scope", a);

{
  a = 2;
  console.log("a in scope", a);
}

console.log("a after scope", a);
