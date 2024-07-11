//constant

var a = 1;
console.log("a before scope", a);

{
  var a = 2;
  console.log("a in scope", a);

  a = "string";
  console.log("a in scope after update", a);
}

console.log("a after scope", a);
