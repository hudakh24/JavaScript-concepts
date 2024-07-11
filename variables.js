//constant

const a = 1;
console.log("a before scope", a);

{
  console.log("a in scope", a);
  const a = 2;
}

console.log("a after scope", a);
