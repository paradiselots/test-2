/*JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  
<!-- const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return
<!-- () => (new in ECMAScript 6) -->

JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
*/

/*DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changing Styles
style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

##It is important to CACHE selectors in variables*/

/*FUNCTIONS*/


/*Functions in JavaScript are blocks of code that can be defined once and executed (or called) 
multiple times throughout a program. A function can have parameters (inputs) and return a value (output).

Here is an example of how a function works:*/

// Define a function that takes two parameters and returns their sum
// function addNumbers(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
//   }
  
//   // Call the function with arguments (inputs) and store the result in a variable
//   var result = addNumbers(3, 5);
  
//   // Output the result to the console
//   console.log(result); // Output: 8

/*In the above code, we define a function called addNumbers that takes two parameters num1 and num2. 
Inside the function, we declare a variable sum that adds the two numbers together. We then return the value of sum.
To call the function, we pass in two arguments 3 and 5 and store the result in a variable called result. Finally, 
we output the value of result to the console using the console.log() function. Functions can be used to encapsulate logic, 
make code more reusable, and reduce duplication. They are a fundamental building block of many programming languages, including JavaScript.*/



// function multiply(a,b) {
//     return a * b
// }
// var total = multiply (4,5);
// alert(total);

// multiply(5,10);

// function checkDriverAge() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }

// var checkDriverAge = function(age){
//     return age
// }

// var myList=["tiger","cat", "bear", "bird"];

// var myNewList = myList.concat( ["owl", "dog"]);

// console.log(myList)
// console.log(myNewList)




/*LISTS AND ARRAYS*/


// // using this array, 
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array)

// // 1. Remove the Banana from the array.
// array.shift();
// console.log(array)

// // 2. Sort the array in order. 
// array.sort();
// console.log(array)

// // 3. Put "Kiwi" at the end of the array.
// array.push("Kiwi");
// console.log(array)

// // 4. Remove "Apples" from the array.(integer place, how many removed after this integer)
// array.splice(0, 1);
// console.log(array)

// // 5. Sort the array in reverse order. 
// array.reverse();
// console.log(array)

// // using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// // access "Oranges".
// console.log(array2[1][1][0]);

/* In the above code, we use the first index [1] to access the second element of the array2, which is the array ["Apples", ["Oranges"], "Blueberries"].
Then, we use the second index [1] to access the second element of the nested array, which is the array ["Oranges"]. Finally, we use the third index [0] 
to access the first element of the nested array, which is the string "Oranges".*/




/*DATA STRUCTURES: OBJECTS*/
// similar to lists

// var user = {
//     name: "John",
//     age: 34,
//     hobby: "soccer",
//     isMarried: false,
//     spells: ["abracadabra","shazam","boo"],
//     shout: function() {
//         console.log("AHHHHHHHH!")
//     }
// };

// // how to add something to this object list
// user.favoriteFood = "spinach";

// // how to change something on this object list
// user.isMarried = true;


/*different ways to retrieve specific information*/

// Using dot notation
// console.log(user.name); // Output: "John"
// console.log(user.age); // Output: 34
// console.log(user.spells);
// console.log(user.shout);

// // Using square bracket notation
// console.log(user["hobby"]); // Output: "soccer"
// console.log(user["isMarried"]); // Output: true

// /*In the above code, we use dot notation to retrieve the name and age properties of the user object.
// We use square bracket notation to retrieve the hobby and isMarried properties. Note that when using square bracket notation, 
// the property name must be a string enclosed in quotes.*/


// // objects can be put into lists and list can be put into objects too.
// var list =[{username: "andy", password: "secret"},{Username: "jess", Password: "123"}];
// console.log(list)


/* EXERCISE*/
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// var user = {
//     username: "Paradiselots",
//     password: "123"
// };

// // 2. Create an array which contains the object you have made above and name the array "database".
// var database = [
//     {
//         username: "paradiselots",
//         Password: "123"
//     },
//     {
//         username: "sally",
//         password: "supersecret"
//     },
//     {  
//          username: "ingrid",
//         password: "777"
//     }
    
// ];

// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


// var newsFeed = [
//     {
//         username:"Bobby",
//         timeline: "so tired from all that learning!"
        
//     },
//     {
//         username:"Sally",
//         timeline:"Javascript is sooooo cool!"
        
//     },
//     {
//         username:"Mitch",
//         timeline: "Javascript is preety cool!"
        
//     },
// ];
// function isUserValid(username, password) {
//     for(var i=0; i < database.length; i++) {
//         if(database[i].username === username &&
//             database[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }
   
// function signIn(username, password) {
//     if(isUserValid(username, password)) {
//         console.log(newsFeed);

//     }   else{
//         alert("sorry, wrong username and password");
//     }
// }

//     var userNamePrompt = prompt("what\'s your username?");
//     var passwordPrompt = prompt("What\'s your password?");

//     signIn(userNamePrompt, passwordPrompt);





// var todos= [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// how to add something to all items in an array using a for loop:

// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     todos[i] = todos [i] + "!";
//     // console.log(todos[i] + "!");
// }
// console.log(todos)


// // this would be how you check off everything of a todo list
// var todosLength = todos.length;
// for(var i=0; i < todosLength; i++) {
//     todos.pop();
// }



/*while loop*/


// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

//do loop 

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counerTwo > 0);


// FOREACH LOOP

// todos.forEach(function(todo,i) {
//     console.log(todo,i);
// })
// in a foreach loop in the function the set is as follows (variable, index number)