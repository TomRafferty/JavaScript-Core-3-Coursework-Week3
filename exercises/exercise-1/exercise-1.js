const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
//What is the syntax to destructure the object personOne in exercise-1.js?
//answer:
let { name, age, favouriteFood } = personOne;

function introduceYourself(name, age, favouriteFood) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(name, age, favouriteFood);
