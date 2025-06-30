// ES6 - Grand Assignment - Starts 

// Topic # 1 - Global Scope

/* ● Declare a variable using var outside of any function or block.
● Declare a variable using let outside of any function or block.
● Declare a variable using const outside of any function or block.
● Log all three variables to the console.
● Are they accessible globally? */

var num = 2;
let num1 = 4;
const num2 = 6;

console.log(num) // 2
console.log(num1) // 4
console.log(num2) // 6
// all three variables accessible globally


// Topic # 2 - Function Scope:

/* ● Create a function and declare a variable using var inside the 
function.
● Declare a variable using let inside the function.
● Declare a variable using const inside the function.
● Try to log all three variables to the console outside the function.
● What do you observe? */

function functionScope() {
  var funcVar = "var in function";
  let funcLet = "let in function";
  const funcConst = "const in function";
}
functionScope();

console.log(funcVar);   // ReferenceError
console.log(funcLet);   // ReferenceError
console.log(funcConst); // ReferenceError
// Variables declared inside a function are NOT accessible outside.


// Topic # 3 - Block Scope:

/* ● Use an if statement and declare a variable using var inside the 
block.
● Declare a variable using let inside the block.
● Declare a variable using const inside the block.
● Try to log all three variables to the console outside the block.
● What do you observe? */

condition = true;
if (condition) {
  var blockVar = "var in block";
  let blockLet = "let in block";
  const blockConst = "const in block";
}

console.log(blockVar);   // "var in block"
console.log(blockLet);   // ReferenceError
console.log(blockConst); // ReferenceError
// Only `var` is not block scoped.

// Topic # 4 - Hoisting with var:

/* ● Write code where you log a var variable before it is declared.
● What value do you get? Scope */

console.log(variable) // undefined

var variable = "ismail";

// `var` declarations are hoisted, but their values are `undefined` until assignment.

///Topic # 5 - Hoisting with let and const:

/* ● Write code where you log a let variable before it is declared.
● Write code where you log a const variable before it is declared.
● What kind of error do you get?: */

console.log(letHoist);
 // ReferenceError: Cannot access 'letHoist' before initialization
let letHoist = "faraz";

console.log(constHoist); 
 // ReferenceError: Cannot access 'constHoist' before initialization
const constHoist = "hamza";

///Topic # 6 - Re-declaration:

/* ● Try to declare the same variable name twice using var.
● Try to declare the same variable name twice using let.
● Try to declare the same variable name twice using const.
● What happens in each case?: */

var varDec = true;
var varDec = false; // value updated

let letDec = true;
let letDec = false; // Syntax Error

const constDec = true;
const constDec = false; // Syntax Error


///Topic # 7 - Re-Assigning:

/* ● Declare a variable using var and assign it a value. Then reassign it a 
new value.
● Declare a variable using let and assign it a value. Then reassign it a 
new value.
● Declare a variable using const and assign it a value. Then reassign it 
a new value.
● What happens in each case? */

var varAssign = "hello";
varAssign = "World"; // value updated

let letAssign = "hello";
letAssign = "World"; // value updated

const constAssign = "hello";
constAssign = "World"; // Type Error


///Topic # 8 - Temporal Dead Zone (TDZ):

/* ● Declare a let variable inside a block but try to log it before the 
declaration.
● Declare a const variable inside a block but try to log it before the 
declaration.
● What error do you get? Why?: */


{
console.log(letTdz);
 // ReferenceError: Cannot access 'letHoist' before initialization
let letTdz = "faraz";
}

{
console.log(constTdz); 
 // ReferenceError: Cannot access 'constHoist' before initialization
const constTdz = "hamza";
}


///Topic # 9 - When to use var, let, and const:

/* ● Write a piece of code to demonstrate a good use case for var.
● Write a piece of code to demonstrate a good use case for let.
● Write a piece of code to demonstrate a good use case for const.: */

///var - needed when work in a function-scoped or globally call also re-assigning and re-decalaration
{
var varUse = "hello";
varUse = "World"; //re-assigning
var varUse = "hello world"; //re -declaration
}
console.log(varUse) // Accessible 

///let - needed for blocked-scoped variables that will re-assigned but not re-declared;

{
let letUse = "hello";
letUse = "Hello World"; // re-assigned
console.log(letUse) // Accessible inside block-scoped
}
 
///const - needed also for block-scoped variables but will not re-assigned as well as re-decalared:

{
const constUse = "hello";
constUse = "hello world"; // not possible
console.log(constUse) // Accessible inside block-scoped
}


///Topic # 10 - String Interpolation:

/* ● Create variables for a person's first name and last name.
● Use a template literal to create a full name string and log it to the 
console.: */

let firstName = "Ismail";
let lastName = "Shah";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

///Topic # 11 - Multi-line Strings:

/* ● Use a template literal to create a multi-line string (e.g., an statement) and 
log it to the console.:
 */

let multi_line = `a quick brown
fox jumps over the
lazy dog`;

console.log(multi_line)

///Topic # 12 - Simple Expressions:

/* ● Create variables for two numbers.
● Use a template literal to create a string that includes the sum of the 
numbers.
● Log the string to the console.: */

let num1 = 12;
let num2 = 8;
let sum = 
`The total sum is: ${num1 + num2}`;
console.log(sum)

///Topic # 13 - Function Calls:

/* ● Create a function that takes two numbers and returns their product.
● Use a template literal to call this function inside a string and log the 
result to the console.: */

function product(a,b){
    return a*b;
}
let result = `The product is: ${product(5,4)}`
console.log(result);

///Topic # 14 - Creating a Tagged Template:

/* ● Write a simple tag function that takes a template string and logs it.
● Use this tag function with a template literal.: */

function tagged(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
}

let name = "Ismail";
let age = 20;

tagged`My name is ${name} and I am ${age} years old.`;


///Topic # 15 - Formatting:

/* ● Write a tag function that formats a string by making it uppercase.
● Use this tag function with a template literal and log the result. */

function makeUppercase(strings, ...values) {
  let result = '';
  strings.forEach((str, index) => {
    result += str + (values[index] || '');
  });
  return result.toUpperCase();
}

let name = "Ismail";
let city = "Karachi";

let format = makeUppercase`Hello, ${name}! Welcome to ${city}.`;
console.log(format);

///Topic # 16 - Conditional Logic:

/* ● Create a variable for the current hour.
● Use a template literal to display a different message depending on 
whether it's morning (before 12 PM) or afternoon (after 12 PM).: */

let hour = new Date().getHours();
let message = `Good ${hour < 12 ? "morning" : "afternoon"}!`;
console.log(message);

///Topic # 17 - Loops within Template Literals:

/* ● Create an array of items (e.g., a shopping list).
● Use a template literal to generate an HTML list (<ul> and <li>
elements) from the array and log it to the console.: */

const List = ["Fruits", "Vegetables", "Milk","Yougurt","Grocery"];

let listItems = "";

for (let item of List) {
  listItems += `<li>${item}</li>`;
}

let htmlList = `<ul>${listItems}</ul>`;
console.log(htmlList);

///Topic # 18 - Escaping Backticks:

/* ● Create a string that includes a backtick character using a template 
literal.
● Log the string to the console.: */

let intro = `In JS to show backticks as a string using forward slash with backtick like this,(\`) so that backtick is a part of string not the end of template literal `
console.log(intro)

///Topic # 19 - Nested Template Literals:

/* ● Create nested template literals to build a more complex string, such as 
a nested HTML structure (e.g., a table with rows and cells).
● Log the result to the console.: */

let TableRow = (cell1, cell2,cell3,cell4) => `
  <tr>
    <td>${cell1}</td>
    <td>${cell2}</td>
    <td>${cell3}</td>
    <td>${cell4}</td>
  </tr>
`;

let table = `
  <table>
      
      Fruit List:
    ${createTableRow("Apple", "Banana","Mango","Strawberry")}
     Vegetable List:
    ${createTableRow("Carrot", "Potato","Tomato","Chilli")}
  </table>
`;

console.log(table);

///Topic # 20 - Simple Condition:

/* ● Create a variable age.
● Use the ternary operator to assign a variable canVote the value 
"Yes" if age is 18 or older, and "No" otherwise.
● Log canVote to the console.: */

let userAge = +prompt("Enter your age for voting");

let canVote = userAge >= 18 ? "eligible to vote" : "not eligible to vote";

console.log(canVote)

///Topic # 21 - Even or Odd:

/* ● Create a variable number.
● Use the ternary operator to assign a variable evenOrOdd the value 
"Even" if number is even, and "Odd" if it's odd.
● Log evenOrOdd to the console.: */

const number = 80782 ;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd); //Even


///Topic # 22 - Grade Evaluation:

/* Create a variable score.
Use the ternary operator to assign a variable grade based on the following conditions:
● "A" if score is 90 or above.
● "B" if score is 80 or above.
● "C" if score is 70 or above.
● "D" if score is 60 or above.
● "F" otherwise.
Log grade to the console.: */

let score = 51;

let grade =
 score >= 90 ? `You got "A" grade` 
 : score >= 80 ? `You got "B" grade` 
 : score >= 70 ? `You got "C" grade` 
 : score >= 60 ? `You got "D" grade` 
 : score >= 50 ? `You got "F" grade` : 
 `Your Fail`;
 
 console.log(grade) // F grade 
 
 
///Topic # 23 - Login Status:

/* ● Create a variable isLoggedIn.
● Use the ternary operator and logical operators to assign a variable 
statusMessage the value "Welcome back!" if isLoggedIn is true, 
and "Please log in" if isLoggedIn is false.
● Log statusMessage to the console.: */
 
let isLoggedIn = true ;

let statusMessage = isLoggedIn && "Welcome back" ? "Please log in";

console.log(statusMessage)
 

///Topic # 24 - Discount Eligibility:

/* ● Create variables isMember and purchaseAmount.
● Use the ternary operator and logical operators to assign a variable 
discount the value 10% of purchaseAmount if isMember is true
and purchaseAmount is greater than 100, and 0 otherwise.
● Log discount to the console.: */
 
let isMember = true;
let purchaseAmount = 450;

let discount = isMember && purchaseAmount >= 100 ? `the discount is: ${purchaseAmount *(10/100)}%` : 0;

console.log(discount)


///Topic # 25 - Determine Max Value:

/* ● Create a function maxValue(a, b) that returns the larger of the two 
numbers using the ternary operator.
● Call the function with two numbers and log the result.: */
 
function maxValue(a, b){
    return a > b ? a : b;
}
console.log(maxValue(34,67));


///Topic # 26 - Greeting Message:

/* ● Create a function greet(name) that returns a greeting message. If 
name is not provided (or is an empty string), it should return "Hello, 
guest!", otherwise, it should return "Hello, [name]!".
● Call the function with and without a name and log the result. */
 
function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}

console.log(greet("Ismail Shah"));
console.log(greet());
 
///Topic # 27 - Mapping Values:

/* ● Create an array of numbers.
● Use the map method with a ternary operator to create a new array 
where each number is doubled if it is even and tripled if it is odd.
● Log the new array to the console */.

let numbers = [1,2,3,4,5,6,7,8,9];
let mapped = numbers.map((e)=>{
    e % 2 === 0 ? e * 2 : e *3
})
console.log(mapped)

///Topic # 28 - Filtering Values:

/* ● Create an array of strings.
● Use the filter method with a ternary operator to create a new array 
that only includes strings with a length greater than 3.
● Log the new array to the console. */

let names = ["zia","Alina","Maheen","Kashif","Ali","Saad"]
let filterData = names.filter(e => {
    return e.length > 3 ;
})
console.log(filterData)

///Topic # 29 - Copying an Array:

/* ● Create an array originalArray with some elements.
● Use the spread operator to create a copy of originalArray called 
copiedArray.
● Log both arrays to the console to verify they are the same but not the 
same reference. */

let originalArray = ["shah",4,"Quetta",69,"Ramsha"];
let copiedArray = [...originalArray]

console.log(originalArray,copiedArray)

///Topic # 30 - Merging Arrays:

/* ● Create two arrays array1 and array2.
● Use the spread operator to create a new array mergedArray that 
combines the elements of array1 and array2.
● Log mergedArray to the console. */

let array1 = ["Ismail",56,"Multan",679,"Haya"];
let array2 = ["shah",4,"Quetta",69,"Ramsha"];
let mergedArray = [...array1,...array2]
console.log(mergedArray)

///Topic # 31 - Adding Elements to an Array:

/* ● Create an array numbers with some elements.
● Use the spread operator to add a new element at the beginning and at 
the end of the numbers array.
● Log the updated array to the console. */

let numbers = [1,3,5,7,9,2,4,6,8]
let updatedArray = [0,...numbers,10]
console.log(updatedArray)


///Topic # 32 - Copying an Object:

/* ● Create an object originalObject with some key-value pairs.
● Use the spread operator to create a copy of originalObject called 
copiedObject.
● Log both objects to the console to verify they are the same but not the 
same reference. */

let originalObject = {
    name : "ismailshah",
    profession : "teacher",
    age : 20
}
let copiedObject = {...originalObject}
console.log(originalObject,copiedObject)


///Topic # 33 - Merging Objects:

/* ● Create two objects object1 and object2 with some overlapping 
keys.
● Use the spread operator to create a new object mergedObject that 
combines the properties of object1 and object2.
● Log mergedObject to the console and note which values are 
retained for the overlapping keys. */

let object1 = {
    magicNum : 6174,
    city: "NewYork"
}
let object2 = {
    num : 87,
    magicNum : 1209,
    city: "Venus"
}
let mergedObject = {
    ...object1,...object2
}
console.log(mergedObject)

///Topic # 34 - Updating Object Properties:

/* ● Create an object user with properties name, age, and email.
● Use the spread operator to create a new object updatedUser that 
updates the email property and adds a new address property.
● Log the updatedUser object to the console.
 */
 
let user ={
    name : "Ismail",
    age : 20,
    email : "ismailshah123@gmail.com"
}
let updatedUser = {...user}
updatedUser.email = "mishukhan123@gmail.com";
updatedUser.address = "H # R-67, Etawa Society,Ahsanabad"

console.log(updatedUser)

///Topic # 35 - Passing Array Elements as Arguments:

/* ● Create a function sum(a, b, c) that returns the sum of three 
numbers.
● Create an array numbers with three elements.
● Use the spread operator to pass the elements of numbers as 
arguments to the sum function.
● Log the result to the console. */

function sum(a,b,c){
    return a+b+c;
}
let arr = [2,5,6]
console.log(sum(...arr))

///Topic # 36 - Combining Multiple Arrays:

/* ● Create a function combineArrays that takes any number of arrays 
as arguments and returns a single array containing all elements.
● Use the spread operator inside the function to combine the arrays.
● Call the function with multiple arrays and log the result. */

function combineArrays(...arrays) {
 let combine = []
  return combine.concat(...arrays);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let result = combineArrays(arr1, arr2, arr3);
console.log(result);

///Topic # 37 - Rest Parameter with Spread Operator:

/* ● Create a function multiply that takes a number and any number of 
additional arguments.
● Use the rest parameter to gather the additional arguments into an 
array and multiply each by the first argument.
● Return an array of the results.
● Call the function with appropriate arguments and log the result.: */

function multiply(a,...nums){
    return nums.map(e => e * a);
}

console.log(multiply(5,1,2,3));

///Topic # 38 - Spread Operator with Nested Structures:

/* ● Create a nested array nestedArray and use the spread operator to 
create a shallow copy.
● Modify the inner arrays in the copied array.
● Log both the original and copied arrays to observe the effect of 
shallow copying. */

let nestedArray = [1,3,3,["mango","banana","lychee",["chilli","potato","tomato"],"pineapple"],5,6,7];

let copiedArray = [...nestedArray]
copiedArray[1] = 2;
copiedArray[3][0] = "strawberry";
copiedArray[3][5] = "Guava";
copiedArray[3][3][2] = "carrot";
copiedArray[3][3][3] = "lemon";

console.log(copiedArray)



///Topic # 39 - Sum Function:

/* ● Create a function sum that uses the rest operator to take any number 
of arguments.
● The function should return the sum of all its arguments.
● Call the function with different numbers of arguments and log the 
results. */

function sum(...a){
 return a.reduce((prev,curr) => prev+curr)
    
}
console.log(sum(3,4,5,6))

console.log(sum(12,13,14,15))


///Topic # 40 - Average Function:

/* ● Create a function average that uses the rest operator to take any 
number of arguments.
● The function should return the average of all its arguments.
● Call the function with different numbers of arguments and log the results.
 */

function average(...num){
  let  find = num.reduce((p,c)=>p+c)
    return find / num.length;
}
console.log(average(10,30,40,60))

///Topic # 41 - First and Rest:

/* ● Create an array numbers with at least 5 elements.
● Use array destructuring with the rest operator to assign the first 
element to a variable first and the remaining elements to a variable 
rest.
● Log first and rest to the console. */

let numbers = [2,3,5,7,8];
let [first,...rest] = numbers ;
console.log(first,rest)

///Topic # 42 - Skip and Rest:

/* ● Create an array colors with at least 5 elements.
● Use array destructuring with the rest operator to skip the first two 
elements and assign the remaining elements to a variable 
remainingColors.
● Log remainingColors to the console. */

let colors = ["red","green","yellow","black",
"white","purple"]
let [,,...remainingColors] = colors;
console.log(remainingColors);

///Topic # 43 - Basic Destructuring:

/* ● Create an object person with properties name, age, email, and 
address.
● Use object destructuring with the rest operator to assign name and 
email to individual variables, and the remaining properties to a 
variable rest.
● Log the variables to the console. */

let person = {
    name : "ismail",
    age : 20,
    email : "ismailshah123@gmail.com",
    address : "H # R-67, Etawa Society,Ahsanabad"
}
let {name , age , ...rest} = person;
console.log(name)
console.log(age)
console.log(rest)


///Topic # 44 - Nested Destructuring:

/* ● Create an object student with properties id, name, grades, and 
info (where info is another object with properties age and major).
● Use nested destructuring with the rest operator to extract id, name, 
and major to individual variables, and the remaining properties to a 
variable rest.
● Log the variables to the console. */

let student = {
    id : 987,
    name : "Ismail Shah",
    grades : "A+",
    info : {
        age : 24,
        major : "Sociology"
    }
}
let {id,name,grades,info:{age,major}} = student;
console.log(`id: ${id}`)
console.log(`name: ${name}`)
console.log(`grades: ${grades}`)
console.log(`age: ${age}`)
console.log(`major: ${major}`)

///Topic # 45 - Filter Even Numbers:

/* ● Create a function filterEven that uses the rest operator to take any 
number of arguments.
● The function should return a new array containing only the even 
numbers.
● Call the function with different numbers of arguments and log the 
results. */

function filterEven(...num){
    let filter = num.filter (e => e % 2 === 0)
    return filter;
}

console.log(filterEven(1,3,4,5,6,8,9))
console.log(filterEven(12,31,40,57,86,81,99))
console.log(filterEven(103,380,234,895,961))


///Topic # 46 - Combine and Sort Arrays:

/* ● Create a function combineAndSort that uses the rest operator to 
take any number of arrays.
● The function should combine all the arrays into one and return the 
sorted result.
● Call the function with different arrays and log the results.
 */
 
 function combineAndSort(...arrays) {
  return arrays.flat().sort();
}

console.log(combineAndSort([3, 1], [5, 2], [4,7,9]));
console.log(combineAndSort([13, 11], [15, 22], [14,27,29]));
 
///Topic # 47 - Basic Destructuring:

/* ● Create an array fruits with the elements "apple", "banana", and 
"cherry".
● Use destructuring to assign the first element to a variable 
firstFruit, the second to secondFruit, and the third to 
thirdFruit.
● Log the variables to the console. */

let fruits = ["apple","banana","cherry"];
let [firstFruit,secondFruit,thirdFruit] =
fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

///Topic # 48 - Skipping Elements:

/* ● Create an array colors with the elements "red", "green", "blue", 
"yellow".
● Use destructuring to assign the first element to primaryColor and 
the third element to tertiaryColor.
● Log the variables to the console. */

let colors = ["red", "green", "blue", 
"yellow"]
let [primaryColor,,tertiaryColor,] = colors;

console.log(primaryColor);
console.log(tertiaryColor);

///Topic # 49 - Rest Operator:

/* ● Create an array numbers with the elements 1 through 5.
● Use destructuring to assign the first element to firstNumber and 
the rest of the elements to remainingNumbers.
● Log the variables to the console. */

let nums = [1,2,3,4,5]
let [firstNum,...remainingNum] = nums;
console.log(firstNum);
console.log(remainingNum);

///Topic # 50 - Basic Destructuring:

/* ● Create an object person with properties name, age, and city.
● Use destructuring to assign the properties to variables name, age, 
and city.
● Log the variables to the console. */

let person = {
    name : "ismail",
    age : 20,
    city : "Karachi",
}
let {name , age , city} = person;
console.log(name)
console.log(age)
console.log(city)

///Topic # 51 - Renaming Variables:

/* ● Create an object car with properties make, model, and year.
● Use destructuring to assign the properties to variables carMake, 
carModel, and carYear.
● Log the variables to the console. */

let car = {
    make : "toyota",
    model : "hundai",
    year : 2016
}
let {make : carMake,
model : carModel,
year : carYear
}  = car ;

console.log(carMake)
console.log(carModel)
console.log(carYear)


///Topic # 52 - Default Values:

/* ● Create an object settings with properties theme and language.
● Use destructuring to assign the properties to variables theme and 
language, and provide a default value of "English" for language.
● Log the variables to the console. */

let settings = {
    theme : "light",
    language : "Urdu"
}
let {theme, language : "English"} = settings ;

console.log(theme);
console.log(language)

///Topic # 53 - Array of Arrays:

/* ● Create an array nestedArray with the elements [1, 2], [3, 4], 
and [5, 6].
● Use nested destructuring to assign the first elements of each 
sub-array to variables a, b, and c.
● Log the variables to the console. */

let nestedArray = [[1, 2], [3, 4], 
 [5, 6]];
 
let [[a],[b],[c]] = nestedArray;

console.log(a)
console.log(b)
console.log(c)

///Topic # 54 - Object within an Object:

/* ● Create an object profile with properties username, details
(which is another object with properties email and address).
● Use nested destructuring to assign username, email, and address
to variables.
● Log the variables to the console. */

let profile = {
    username : "Ismail Shah",
    details : {
      email : "ismailshah123@gmail.com",
      address : "Karachi"
    }
}

let {username , details : {email,address}} = profiles ;

console.log(username)
console.log(email)
console.log(address)


///Topic # 55 - Mix of Arrays and Objects:

/* ● Create an object data with properties id, info (which is an array 
with elements {name: "Alice"} and {age: 25}).
● Use nested destructuring to assign id, name, and age to variables.
● Log the variables to the console. */

let data = {
    id : "45b7ah",
    info : [
    {name: "Alice"},
    {age: 25}
    ]
    
}

let {id , info : [{name},{age}] } = data ;

console.log(id)
console.log(name)
console.log(age)



///Topic # 56 - Array Parameters:

/* ● Create a function printCoordinates that takes an array [x, y]
as a parameter.
● Use destructuring in the function parameter to extract x and y.
● Log x and y inside the function.
● Call the function with different coordinates. */

function printCoordinates(array){
    let [x,y] = array;
    console.log(x)
    console.log(y)
}
printCoordinates([2,3]);
printCoordinates([24,30]);


///Topic # 57 - Object Parameters:

/* ● Create a function displayUser that takes an object {name, age}
as a parameter.
● Use destructuring in the function parameter to extract name and age.
● Log name and age inside the function.
● Call the function with different user objects. */

function displayUser({name,age}){
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
} 
displayUser({name : "ismail",age : 20});
displayUser({name : "saeed",age : 30});

///Topic # 58 - List Property Names:

/* ● Create an object book with properties title, author, and year.
● Use Object.keys() to get an array of the property names of the 
book object.
● Log the array to the console. */

let book = {
    title : "forty rules of love",
    author : "Elif Shafak",
    year : "2018"
}
 let array = Object.keys(book);
 console.log(array)

///Topic # 59 - Count Properties:

/* ● Create an object student with properties name, age, grade, and 
school.
● Use Object.keys() to get an array of the property names and 
determine the number of properties in the student object.
● Log the number of properties to the console. */

let student = {
    name : "haya",
    age : "18+",
    grade : "A+",
    school : "ABC School"
}
let keys = Object.keys(student);
let numbers = keys.length;

console.log(`Properties are : ${keys}`)
console.log(`Numbers of properties are ${keys}`)


///Topic # 60 - Iterate Over Keys:

/* Create an object product with properties name, price, and category.
Use Object.keys() to get an array of the property names and iterate 
over this array to log each property name and its corresponding value. */

let product = {
  name: "Smartphone",
  price: 25000,
  category: "Electronics"
};

let keys = Object.keys(product);

keys.forEach(key => {
  console.log(`${key}: ${product[key]}`);
});

///Topic # 61 - List Property Values:

/* ● Create an object movie with properties title, director, year, 
and genre.
● Use Object.values() to get an array of the property values of the 
movie object.
● Log the array to the console. */

let movie = {
    title : "Intersteller",
    director : "Christopher Nolan",
    year : "2006",
    genre : "Astronomy and Space"
}
let array = Object.values(movie);
console.log(array)

///Topic # 62 - Sum Values:

/* ● Create an object scores with properties math, science, and 
english, each with numeric values.
● Use Object.values() to get an array of the property values and 
calculate the total sum of the values.
● Log the sum to the console. */

let scores = {
    math : 75,
    science : 60,
    english : 50
}
let values = Object.values(scores);
let sum = values.reduce((prev,curr) =>{
    return prev + curr;
} )
console.log(`Total Score is : ${sum}`)

///Topic # 63 - Iterate Over Values:

/* ● Create an object user with properties username, email, and 
location.
● Use Object.values() to get an array of the property values and 
iterate over this array to log each value. */

let user = {
    username : "Ismail Shah",
    email : "ismailshah123@gmail.com",
    location : "Karachi"
}
let values = Object.values(user);
values.forEach(e => {
    console.log(e);
})

///Topic # 64 - List Entries:
/* 
● Create an object car with properties make, model, and year.
● Use Object.entries() to get an array of the key-value pairs of the 
car object.
● Log the array to the console. */

let car = {
    make : "toyota",
    model : "hundai",
    year : 2016
}

let array = Object.entries(car);
console.log(array)


///Topic # 65 - Convert Object to Array:

/* ● Create an object person with properties firstName, lastName, 
and age.
● Use Object.entries() to convert the person object into an array 
of key-value pairs.
● Log the array to the console. */

const person = {
  firstName: "Ismail",
  lastName: "Shah",
  age: 20
};

const entries = Object.entries(person);
console.log(entries);

///Topic # 66 - Iterate Over Entries:

/* ● Create an object settings with properties theme, 
notifications, and privacy.
● Use Object.entries() to get an array of the key-value pairs and 
iterate over this array to log each key and value. */

let settings = {
    theme : "dark",
    notifications : "sms & call",
    privacy : "pin - password"
}

let entries = Object.entries(settings)
entries.forEach(e => {
let [key,value] = e;
console.log(`${key}: ${value}`)
})

///Topic # 67 - Filter Keys:

/* ● Create an object inventory with properties apples, bananas, 
oranges, and grapes, each with numeric values.
● Use Object.keys() and filter() to get an array of keys where 
the value is greater than 10.
● Log the array to the console. */

let inventories = {
    apples : 8,
    bananas : 13,
    oranges : 10 ,
    grapes : 15
}
let keysArray =  Object.keys(inventories);
let filter = keysArray.filter(value => {
    return inventories[value] > 10 ;
})
console.log(filter)

///Topic # 68 - Transform Values:

/* ● Create an object temperatures with properties morning, 
afternoon, and evening, each with numeric values.
● Use Object.entries() to get an array of key-value pairs, then use 
map() to convert the temperatures from Celsius to Fahrenheit.
● Convert the transformed array back to an object.
● Log the new object to the console. */

let temperature = {
    morning : 28,
    afternoon : 50,
    evening : 40
}
let mapped = Object.entries(temperature)
.map(([e,i])=> {
    return [e , (i * 9/5) + 32] ;
})

let updatedObject = Object.fromEntries(mapped);
console.log(updatedObject);


///Topic # 69 - Key-Value Swap:

/* ● Create an object roles with properties admin, editor, and 
viewer, each with string values.
● Use Object.entries() to get an array of key-value pairs, then use 
map() to swap the keys and values.
● Convert the transformed array back to an object.
● Log the new object to the console. */

let roles = {
    admin : "Faraz",
    editor : "Ismail",
    viewer : "student"
}

let entries = Object.entries(roles).map(([keys,values])=>{
    return [values,keys];
})

let updatedObject = Object.fromEntries(entries);

console.log(updatedObject)

///Topic # 70 - Filter and Map:

/* ● Create an array numbers with values from 1 to 10.
● Write a higher-order function filterAndMap that takes an array, a 
filter function, and a map function.
● Use this function to filter out even numbers and then square the 
remaining numbers.
● Log the resulting array to the console */

let numbers = [1,2,3,4,5,6,7,8,9,10];

function filterAndMap(array, filterFunc, mapFunc) {
  return array.filter(filterFunc).map(mapFunc);
}

let result = filterAndMap(
  numbers,
  num => num % 2 !== 0,     
  e => e * e 
);

console.log(result);

///Topic # 71 - Sort and Reduce:

/* ● Create an array words with the values "apple", "banana", "cherry", 
"date".
● Write a higher-order function sortAndReduce that takes an array, a 
sort function, and a reduce function.
● Use this function to sort the words alphabetically and then 
concatenate them into a single string.
● Log the resulting string to the console. */

let words = ["apple", "banana", "cherry", "date"];

let sortAndReduce = ((words,sort,reduce) => {
    let sorting = words.sort(sort);
    return sprting.reduce(reduce);
})

let result = sortAndReduce(
    words, (a,b) => a.localeCompare(b),
    (prev,curr) => prev + curr
)
console.log(result)

///Topic # 72 - Simple Callback:

/* ● Write a function greet that takes a name and a callback function.
● The greet function should call the callback function with a greeting 
message.
● Write a callback function printGreeting that logs the message to 
the console.
● Call the greet function with a name and the printGreeting
callback. */

function greet(name,callBack){
   let message = `Hello ${name}! How are You?`
   callBack(message);
    
}
function printGreeting(message){
    console.log(message)
}
greet("Ismail",printGreeting)
    

///Topic # 73 - Asynchronous Callback:

/* ● Write a function fetchData that simulates fetching data from a 
server (use setTimeout to delay execution).
● The fetchData function should take a callback function and call it 
with the data after a delay.
● Write a callback function displayData that logs the data to the 
console.
● Call the fetchData function with the displayData callback. */

function fetchData(callBack){
 console.log("fetching data...");
 
    setTimeout(() => {
    
        let object = {
            id: 123,
            name : "Ismail"
        }
        
        callBack(object)
    },3000);   
  }
     
    
    

function displayData(data){
  console.log(`fetching data: ${data}`)
}
fetchData(displayData)


///Topic # 74 - Simple Arrow Function:

/* ● Convert the following function to an arrow function:
function add(a, b) {
 return a + b;
}
● Log the result of calling the arrow function with arguments 3 and 5. */

let add = (a,b) => {
    return a + b;
}

console.log(add(3,5))

///Topic # 75 - Arrow Function with Array Methods:

/* ● Create an array numbers with values from 1 to 5.
● Use the map method and an arrow function to create a new array with 
each number squared.
● Log the resulting array to the console. */

let numbers = [1,2,3,4,5];
let result = numbers.map(num => num*num )
console.log(result)


///Topic # 76 - Variable Scope:

/* ● Write a function outer that declares a variable x and assigns it a 
value.
● Inside outer, write another function inner that logs x to the console.
● Call the inner function from within outer.
● Call the outer function to see the result. */

let outer = () =>{
    let x = "ismail";
    let inner = () => {
        console.log(x)
        
    }
    inner()
    
}
outer();


///Topic # 78 - Closure:

/* ● Write a function createCounter that returns another function.
● The returned function should increment and log a counter variable 
that is declared in createCounter.
● Create two counters and demonstrate that they maintain independent 
state. */

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Counter:", count);
    };
}

const counterA = createCounter();
const counterB = createCounter();

counterA(); 
counterA(); 

counterB(); 
counterB(); 

counterA(); 


///Topic # 79 - Simple Default Parameters:

/* ● Write a function greet that takes a name and a greeting message 
with a default value of "Hello".
● The function should log the greeting message and the name to the 
console.
● Call the function with and without the greeting message to see both 
cases.
 */
 
function greet(name,msg = "Hello"){
    console.log(msg , name)
}
greet("Ismail"); 
greet("Ismail","Hi") 

///Topic # 80 - Default Parameters with Other Arguments:

/* ● Write a function calculateArea that takes width and height with 
default values of 10 and 5, respectively.
● The function should return the area.
● Call the function with and without arguments and log the results. */

function calculateArea(length =45, width= 60){
    let area = length * width;
    return area;
}
console.log(calculateArea())
console.log(calculateArea(25))
console.log(calculateArea(10,30))

///Topic # 81 - Square Numbers:

/* ● Create an array numbers with values [1, 2, 3, 4, 5].
● Use map to create a new array where each number is squared.
● Log the resulting array to the console. */

let numbers = [1,2,3,4,5];
let result = numbers.map(num => num*num )
console.log(result)

///Topic # 82 - Convert to Uppercase:

/* ● Create an array words with values ["apple", "banana", 
"cherry"].
● Use map to create a new array where each word is converted to 
uppercase.
● Log the resulting array to the console.
 */
 
let words = ["apple", "banana", 
"cherry"];
let mapped = words.map(e => {
    return e.toUpperCase()})
console.log(mapped)
 
///Topic # 83 - Filter Even Numbers:

/* ● Create an array numbers with values [1, 2, 3, 4, 5, 6, 7, 
8, 9, 10].
● Use filter to create a new array containing only even numbers.
● Log the resulting array to the console.
 */

let numbers = [1,2,3,4,5,6,7,8,9,10]
let filterEven = numbers.filter(e => {
    return e % 2 === 0;
})
console.log(filterEven)
 
///Topic # 84 - Log Numbers:

/* ● Create an array numbers with values [1, 2, 3, 4, 5].
● Use forEach to log each number to the console. */

let numbers = [1,2,3,4,5,6,7,8,9,10];
let looping = numbers.forEach(e => console.log(e))

///Topic # 85 - Filter Long Words:

/* ● Create  an array words with values ["apple", "banana", 
"cherry", "date"].
● Use filter to create a new array containing only words with more 
than 5 characters.
● Log the resulting array to the console.
 */
 
let words =["apple", "banana", 
"cherry", "date","strawberry","nuts"];
let longWord = words.filter(e => {
    return e.length > 5;
})
console.log(longWord)

///Topic # 86 - Log Word Lengths:

/* ● Create an array words with values ["apple", "banana", 
"cherry"].
● Use forEach to log the length of each word to the console. */

let words =["apple", "banana", 
"cherry", "date","strawberry","nuts"];
let length = words.forEach(e => {
   let result = e.length;
    console.log(`length of word is: ${result}`)
})


///Topic # 87 - Sum of Numbers:

/* ● Create an array numbers with values [1, 2, 3, 4, 5].
● Use reduce to calculate the sum of the numbers.
● Log the result to the console. */

let numbers = [1,2,3,4,5];
let result = numbers.reduce((p,c)=>{
    return p + c ;
})
console.log(result)


///Topic # 88 - Concatenate Strings:

/* ● Create an array words with values ["Hello", "world", 
"this", "is", "JavaScript"].
● Use reduce to concatenate all the words into a single string, 
separated by spaces.
● Log the result to the console. */

let words = ["Hello", "world", 
"this", "is", "JavaScript"];
let result = words.reduce((p,c)=>{
    return p + c;
})
console.log(result)

///Topic # 89 - Check for Even Number:

/* ● Create an array numbers with values [1, 3, 5, 7, 8].
● Use some to check if there is at least one even number in the array.
● Log the result to the console. */

let numbers = [1,3,5,7,8];
let result = numbers.some((p)=>{
    return p % 2 === 0;
})
console.log(result);

///Topic # 90 - Check for Long Word:

/* ● Create an array words with values ["apple", "banana", 
"cherry", "date"].
● Use some to check if there is at least one word with more than 5 
characters.
● Log the result to the console. */

let words = ["apple", "banana", 
"cherry", "date"];
let result = words.some(e=>{
    return e.length > 5;
})
console.log(result) 

///Topic # 91 - Check All Even Numbers:

/* ● Create an array numbers with values [2, 4, 6, 8, 10].
● Use every to check if all numbers in the array are even.
● Log the result to the console. */

let numbers = [2,4,6,8,10];
let result = numbers.every(e => {
    return e % 2 === 0;
})
console.log(result)

///Topic # 92 - Check All Long Words:

/* ● Create an array words with values ["elephant", "giraffe", 
"hippopotamus"].
● Use every to check if all words in the array have more than 5 
characters.
● Log the result to the console. */

let words = ["elephant", "giraffe", 
"hippopotamus"];
let result = words.every(e => {
    return e.length > 5;
})
console.log(result)

///Topic # 93 - Find First Even Number:

/* ● Create an array numbers with values [1, 3, 5, 7, 8].
● Use find to get the first even number in the array.
● Log the result to the console. */

let numbers = [1,3,4,7,8];
let result = numbers.find(e => {
    return e % 2 === 0;
})
console.log(result)

///Topic # 94 - Find Long Word:

/* ● Create an array words with values ["apple", "banana", 
"cherry", "date"].
● Use find to get the first word with more than 5 characters.
● Log the result to the console. */

let words = ["apple", "banana", 
"cherry", "date"];
let result = words.find(e => {
    return e.length > 5;
})
console.log(result) 


///Topic # 95 - Find Index of First Even Number:

/* ● Create an array numbers with values [1, 3, 5, 7, 8].
● Use findIndex to get the index of the first even number in the array.
● Log the result to the console. */

let numbers = [1,3,4,7,8];
let result = numbers.findIndex(e => {
    return e % 2 === 0;
})
console.log(result)


///Topic # 96 - Find Index of Long Word:

/* ● Create an array words with values ["apple", "banana", 
"cherry", "date"].
● Use findIndex to get the index of the first word with more than 5 
characters.
● Log the result to the console. */

let words = ["apple", "banana", 
"cherry", "date"];
let result = words.findIndex(e => {
    return e.length > 5;
})
console.log(result) 


///Topic # 97 - Simple Promise:

/* ● Write a function delay that returns a promise which resolves after a 
given number of milliseconds.
● Use the delay function to log "Hello, world!" to the console after a 
delay of 2 seconds. */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log("Hello, world!"); // after 2 seconds
});

///Topic # 98 - Promise Chain:

/* ● Write a function fetchData that returns a promise which resolves 
with some data (e.g., a simple object).
● Chain a .then() method to the fetchData promise to log the data 
to the console. */

function fetchData() {
  return new Promise(resolve => {
    const data = { id: 1, name: "Ismail" };
    resolve(data);
  });
}

fetchData().then(data => {
  console.log("Fetched Data:", data);
});

///Topic # 99 - Error Handling:

/* ● Write a function fetchUserData that returns a promise which 
resolves with user data (e.g., an object with name and age
properties).
● Modify the function to reject the promise with an error message if the 
user data is missing an age property.
● Use a .catch() method to handle the error and log an appropriate 
message to the console. */

function fetchUserData() {
  return new Promise((resolve, reject) => {
    const user = { name: "Ismail" }; // missing age
    if (!user.age) {
      reject("Error: Age property is missing!");
    } else {
      resolve(user);
    }
  });
}

fetchUserData()
  .then(user => console.log("User:", user))
  .catch(error => console.error(error));

///Topic # 100 - Simulate Network Request:

/* ● Write a function getWeather that simulates a network request to 
fetch weather data (use setTimeout).
● The function should return a promise that resolves with weather data 
after 1 second.
● Simulate an error scenario where the promise rejects with an error 
message.
● Use .then() and .catch() to handle both success and error 
cases, logging appropriate messages to the console. */

function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // randomly success or failure
      if (success) {
        resolve({ temperature: 30, condition: "Sunny" });
      } else {
        reject("Network error: Unable to fetch weather data.");
      }
    }, 1000);
  });
}

getWeather()
  .then(data => console.log("Weather:", data))
  .catch(error => console.error("Error:", error));

///Topic # 101 - Simple async Function:

/* ● Write an async function sayHello that uses await to call the 
delay function (from Task 1) and logs "Hello, world!" to the console 
after a delay of 2 seconds. */

async function sayHello() {
  await delay(2000); // using delay from Topic 97
  console.log("Hello, world!");
}

sayHello();

///Topic # 102 - Fetch Data with async/await:

/* ● Write an async function getUserData that uses await to call the 
fetchUserData function (from Task 2).
● Use a try/catch block to handle potential errors and log appropriate 
messages to the console. */

async function getUserData() {
  try {
    const user = await fetchUserData(); // from Topic 99
    console.log("User Data:", user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getUserData();

///Topic # 103 - Fetch and Process Data:

/* ● Write a function fetchUser that returns a promise which resolves 
with user data (e.g., an object with name and age properties).
● Write a function fetchPosts that returns a promise which resolves 
with an array of posts for a given user.
● Write an async function getUserAndPosts that uses await to 
fetch user data and then their posts, logging both to the console. */

function fetchUser() {
  return new Promise(resolve => {
    resolve({ id: 1, name: "Ali", age: 25 });
  });
}

function fetchPosts(user) {
  return new Promise(resolve => {
    resolve([
      { postId: 101, title: "Post 1 by " + user.name },
      { postId: 102, title: "Post 2 by " + user.name },
    ]);
  });
}

async function getUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user);
  console.log("User:", user);
  console.log("Posts:", posts);
}

getUserAndPosts();

///Topic # 104 - Error Handling in async/await:

/* ● Modify the fetchUser function to reject the promise with an error if 
the user data is not found.
● Write an async function getUserInfo that uses await to call the 
fetchUser function and handles potential errors with a try/catch
block, logging appropriate messages to the console. */

function fetchUser() {
  return new Promise((resolve, reject) => {
    const found = false;
    if (found) {
      resolve({ name: "Aisha", age: 22 });
    } else {
      reject("User not found.");
    }
  });
}

async function getUserInfo() {
  try {
    const user = await fetchUser();
    console.log("User Info:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserInfo();

///Topic # 105 - Simulate API Calls:

/* ● Write a function apiCall that simulates an API call and returns a 
promise which resolves with data after a random delay (use 
setTimeout and Math.random()).
● Write an async function getData that uses await to call apiCall
three times in sequence, logging each result to the console.
● Use try/catch to handle any errors that may occur during the API 
calls. */

function apiCall() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 500;
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve(`Data received in ${delay}ms`);
      } else {
        reject("API call failed");
      }
    }, delay);
  });
}

async function getData() {
  try {
    const data1 = await apiCall();
    console.log("API 1:", data1);

    const data2 = await apiCall();
    console.log("API 2:", data2);

    const data3 = await apiCall();
    console.log("API 3:", data3);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();


// ES6 - Grand Assignment - Ends 





