//constant

const a = 1;
console.log("a before scope", a);

{
  const a = 1;
  console.log("a in scope", a);

  a = "new value";
  console.log("a in scope after update", a);
}

console.log("a after scope", a);
