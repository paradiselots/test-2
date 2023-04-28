//this is for git testing only
//test number four 
// this test is for the newtestbranch 
// last test didnt work, this is for the newtest branch again

// Closures
/*In simplified terms, a closure is a function that has access to variables from an outer function's scope, even after the outer function has completed executing. 
The closure "closes over" these variables and "remembers" their values, allowing the function to use them later on. 
This can be useful for creating private variables and methods, generating unique IDs, and more.
*/
// Example: Let's say you have a function that generates a sequence of unique IDs, starting from a given number:
function makeIdGenerator(startingId) {
    var nextId = startingId;
    return function() {
      var id = nextId;
      nextId++;
      return id;
    };
  }
/*   In this example, makeIdGenerator is a function that takes a starting ID and returns a new function that generates unique IDs, starting from that ID. 
The inner function, which is returned by makeIdGenerator, uses a closure to "remember" the value of nextId across multiple calls.

You can use this function to create a new ID generator with a specific starting ID:  
*/
var idGenerator = makeIdGenerator(1000);
console.log(idGenerator()); // Outputs 1000
console.log(idGenerator()); // Outputs 1001
console.log(idGenerator()); // Outputs 1002
/*
In this example, we create a new ID generator by calling makeIdGenerator with a starting ID of 1000. 
We then call the returned function three times to generate the next three IDs in the sequence.

The closure in this example is created by the inner function that is returned by makeIdGenerator. 
This function has access to the nextId variable in the outer function's scope, even after makeIdGenerator has returned and its scope has been destroyed. 
This allows the function to "remember" the current value of nextId between calls and generate unique IDs in sequence.

Closures can be useful in many situations where you need to "remember" the state of a function or keep track of information between calls. 
They can be used to create private variables and methods, generate unique IDs, implement memoization, and more.

*/
// ----------------------------------------------
// Currying
/*
In simplified terms, currying is a process of breaking down a function that takes multiple arguments into a series of functions that take a single argument each. 
This allows you to partially apply the function to its arguments, creating a new function with some of the arguments already set. 
This can be useful for creating more modular and reusable code, and for creating functions that can be easily composed together.
*/
// Example: Let's say you have a function that takes two arguments, x and y, and you want to create a new function that always adds a certain value z to x. One way to do this is to use currying.
function add(x, y) {
    return x + y;
  }
  
  function addZ(z) {
    return function(x) {
      return add(x, z);
    };
  }
  
  const addTen = addZ(10);
  console.log(addTen(5)); // Outputs 15
  console.log(addTen(10)); // Outputs 20
/*
In this example, add is a function that takes two arguments and returns their sum. 
addZ is a function that takes a z parameter and returns a new function that takes an x parameter and adds z to it.

By using currying, we can create a new function addTen that always adds 10 to its argument. 
addTen is a closure that "remembers" the z value passed to addZ and uses it whenever it is called.

Using currying in this way can make code more modular and reusable by separating out the common behavior of adding z to x into a separate function. 
This can help to reduce duplication and make code easier to understand and maintain.
*/

// zero to mastery example:
// const multiply =  (a,b) = a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);


// ----------------------------------------------------
// Compose
/*In simplified terms, function composition is the process of combining two or more functions to create a new function. 
The output of one function is used as the input to the next function, and so on, until the final result is produced. 
This can be useful for creating more modular and reusable code, and for creating complex operations by chaining together simpler operations. 
The resulting function can be thought of as a pipeline or a sequence of steps that transform data from one form to another.
*/
// Example: Let's say you have two functions that perform different operations on an input: double and addFive.
function double(x) {
    return x * 2;
  }
  
  function addFive(x) {
    return x + 5;
  }
//   You could call these functions separately like this:
const result1 = double(10);
const result2 = addFive(result1);
console.log(result2); // Outputs 25

// Alternatively, you could compose these functions together using a compose function that takes two functions as arguments and returns a new function that applies them in sequence:
function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }
  
  var doubleThenAddFive = compose(addFive, double);
  console.log(doubleThenAddFive(10)); // Outputs 25
/*
In this example, compose is a higher-order function that takes two functions, f and g, and returns a new function that applies f to the result of g.

By using compose to combine double and addFive, we can create a new function doubleThenAddFive that first doubles its input and then adds five to it.
This can be more concise and easier to read than calling the two functions separately.

Using function composition in this way can help to reduce code duplication, improve code readability, and make functions more reusable and composable. 
By combining smaller, simpler functions into larger, more complex ones, you can create more expressive and flexible code that is easier to reason about and maintain over time.
*/
  

// zero to mastery example:
// const compose = (f, g) => (a) => f(7);

// const sum = (num) => num + 1;

// compose(sum, sum)(5);