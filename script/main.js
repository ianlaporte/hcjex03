
function timesTwo(params) {
    return params * 2
  };
  
  console.log(timesTwo(4));




// The first, usual way, is by using the function keyword:
// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
// Function declaration
// function greet(who) {
//   return `Hello, ${who}!`;
// }
// Function expression
// const greetme = function(who) {
//   return `Hello, ${who}`;
// }

// The function declaration and function expression I'm going to reference as regular function.
// The second way, available starting ES2015, is the arrow function syntax:

// const greet = (who) => {
//   return `Hello, ${who}!`;
// }