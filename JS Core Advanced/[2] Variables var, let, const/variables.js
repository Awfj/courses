var a = 0;
console.log(a); // 0
var a;
console.log(a); // 0

let b = 0;
console.log(b); // 0
let b = 0;
console.log(b); // SyntaxError: Identifier 'b' has already been declared

const c = 0;
console.log(c); // 0
const c = 0;
console.log(b); // SyntaxError: Identifier 'c' has already been declared