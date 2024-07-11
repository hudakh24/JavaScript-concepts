//constant

let a = 1;
console.log("a before scope", a);

{
  let a = 1;
  console.log("a in scope", a);

  a = "string";
  console.log("a in scope after update", a);
}

console.log("a after scope", a);
