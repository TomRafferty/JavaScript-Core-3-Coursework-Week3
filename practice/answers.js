//Question 1
let x = 1;
function f1() {
  let x = 2;
  console.log(x);
}
console.log(x);
//Explain why line 4 and line 6 output different numbers.
//answer:
//Because x is declared before the f1() function and given a value, then inside the function scope
//x is assigned a new value and logged - this means that value is only used inside the function scope.
// Then x is once again logged outside of the function scope meaning it gets its original value from line 2.

//Question 2
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);

//What will be the output of this code. Explain your answer in 50 words or less.
//answer:
// if it runs it will log 10 to the console but y is undefined outside of f1().

//Question 3
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
//What will be the output of this code. Explain your answer in 50 words or less.
//answer
// I believe it should log 9 (the original value of x) then log an object {x:9}.
