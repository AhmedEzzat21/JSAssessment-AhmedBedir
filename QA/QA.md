1-
 The return type of a function with the async keyword is always a Promise. When you mark a function as async, it automatically wraps the return value in a resolved promise. If the function explicitly returns a promise, it will still be treated the same way.
So, essentially, even if you return a non-promise value from an async function, it will be wrapped in a resolved promise.

2 -
In JavaScript, values that are considered falsy in conditional statements (i.e., they evaluate to false when used in a boolean context) are:
* 		false: The boolean value false itself.
* 		0: The number zero.
* 		'' (empty string): An empty string is considered falsy.
* 		null: The absence of any object value.
* 		undefined: When a variable has been declared but has not yet been assigned a value.
* 		NaN: Stands for "Not a Number," typically the result of an invalid mathematical operation.

3- 
JavaScript has two main categories of data types: primitive and non-primitive (or reference) types.
Primitive Data Types:
* 		String: Represents a sequence of characters.
* 		Number: Represents numeric values.
* 		Boolean: Represents either true or false.
* 		Undefined: Represents an uninitialized variable.
* 		Null: Represents the intentional absence of any object value.
* 		Symbol: Introduced in ECMAScript 6 (ES6), represents a unique identifier.
Non-Primitive (Reference) Data Types:
* 		Object: Represents a collection of key-value pairs.
* 		Array: A special type of object used to store ordered collections of values.
* 		Function: A callable object.
* 		Date: Represents a date and time.
* 		RegExp: Represents a regular expression.

4-
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use variables and functions before they are declared in your code.
Here's a simple example to illustrate hoisting with variables:

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

Even though we're trying to log the value of x before it's assigned, there's no error. This is because, during hoisting, the variable declaration is moved to the top, and it's automatically initialized with undefined.
For functions, hoisting works similarly:


sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

In this example, the function sayHello is hoisted to the top, so you can call it before the actual declaration in the code.
It's important to note that while the declarations are hoisted, the initializations are not. If you try to use a variable before its declaration and initialization, it will have the value undefined. For this reason, it's considered good practice to declare and initialize variables at the top of their scope before using them.

5-
var, let, and const are used to declare variables in JavaScript, and they have some key differences:
* 		Hoisting:
    * var: Hoisted to the top of its scope and initialized with undefined. This means you can use the variable before its declaration, but it might have the value undefined.
    * let and const: Also hoisted, but not initialized. They are in the "temporal dead zone" until the actual declaration is reached in the code. Using them before the declaration results in a ReferenceError.
* 		Scope:
    * var: Function-scoped (or globally-scoped if declared outside any function).
    * let and const: Block-scoped. They are confined to the block, statement, or expression where they are defined.
* 		Reassignment:
    * var: Can be redeclared and reassigned.
    * let: Can be reassigned but not redeclared within the same scope.
    * const: Cannot be reassigned or redeclared.
* 		Initialization:
    * var: Initialized with undefined by default.
    * let and const: Not initialized at the time of declaration (remain in the "temporal dead zone" until declaration is reached).
Here's a quick example:

console.log(x); // Output: undefined
var x = 5;

console.log(y); // Throws a ReferenceError
let y = 10;

const z = 15;
z = 20; // Throws a TypeError, as const variables cannot be reassigned

In modern JavaScript, it's generally recommended to use let and const over var due to their block-scoping and more predictable behavior. Use const for values that should not be reassigned and let for variables that may be reassigned.

6-
- Function Declaration:

function myFunction() {
  // function body
}

Function declarations are hoisted. You can call the function before its declaration in the code, and it will work.

- Function Expression:

var myFunction = function() {
  // function body
};

Function expressions are also hoisted, but there's a subtle difference. The variable declaration is hoisted, but the assignment (where the function is assigned to the variable) is not hoisted. So, you cannot call the function before the variable declaration.

// This will throw an error
myFunction(); // TypeError: myFunction is not a function

var myFunction = function() {
  // function body
};

- Arrow Function Expression:

var myFunction = () => {
  // function body
};
Arrow function expressions are not hoisted. The variable declaration is hoisted, but the assignment is not, similar to regular function expressions.

// This will throw an error
myFunction(); // TypeError: myFunction is not a function

var myFunction = () => {
  // function body
};

7-

JavaScript is a single-threaded, non-blocking language, which means it can only execute one operation at a time. However, it supports asynchronous programming through mechanisms like callbacks, Promises, and more recently, the async/await syntax.
When you encounter asynchronous tasks in JavaScript, they allow the program to perform operations without blocking the execution of the entire program. This is crucial for tasks that may take some time, like fetching data from a server or reading a file.
Here's a brief overview of how asynchronous tasks work behind the scenes:
* 		Callbacks:
    * Traditionally, callbacks were used to handle asynchronous tasks. A function is passed as an argument to another function and is executed when the asynchronous operation is completed.
* 	  fetchData(function(data) {console.log(data);});
* 		Promises:
    * Promises provide a cleaner way to handle asynchronous operations. A Promise represents a value that might be available now, or in the future, or never. It can be in one of three states: pending, fulfilled, or rejected.
* 		fetchData().then(data => {console.log(data);}).catch(error => { console.error(error);});
* 		Async/Await:
    * async/await is a more recent and concise syntax for working with asynchronous code. It makes asynchronous code look and behave more like synchronous code, which can be easier to read and understand.
* 		async function fetchData() { try {const data = await fetchDataFromServer();console.log(data);  } catch (error) { console.error(error);}}
Behind the scenes, when an asynchronous task is encountered, it's offloaded to the browser's Web API (in the case of the browser environment) or to the Node.js runtime (in the case of server-side JavaScript). The main thread remains free to execute other tasks while waiting for the asynchronous task to complete. Once the task is finished, a callback is placed in the event queue, and the event loop eventually picks it up, allowing the associated function to be executed.
This mechanism allows JavaScript to efficiently handle I/O operations without blocking the main thread and provides a smoother user experience in applications.

8-
The event loop is a crucial part of JavaScript's concurrency model. It's responsible for managing the execution of code, handling asynchronous tasks, and maintaining the responsiveness of a JavaScript runtime, whether it's in a browser or in a Node.js environment.
Here's a simplified explanation of how the event loop works:
* 		Execution Stack:
    * JavaScript is a single-threaded language, meaning it has only one execution stack or thread of execution. The execution stack is where your synchronous code is executed line by line.
* 		Asynchronous Tasks:
    * When an asynchronous task is encountered (such as a setTimeout, AJAX request, or a Promise), it's offloaded to the browser's Web API (in the case of the browser) or to the Node.js runtime (in the case of server-side JavaScript). This allows the main thread to continue executing other tasks.
* 		Callback Queue:
    * Once the asynchronous task is completed, a callback (or event) is placed in the callback queue.
* 		Event Loop:
    * The event loop continuously checks the callback queue. If the stack is empty (meaning the synchronous code has finished executing), it takes the first callback from the queue and pushes it onto the execution stack.
* 		Execution Continues:
    * The callback is executed, and the process repeats. This cycle of checking the callback queue and executing callbacks continues as long as there are tasks in the queue.
This mechanism allows JavaScript to handle asynchronous tasks without blocking the main thread. It ensures that your application remains responsive and can handle tasks like user input, animations, and network requests while still executing other code.
In summary, the event loop is responsible for coordinating the execution of both synchronous and asynchronous tasks in JavaScript, enabling it to handle non-blocking I/O operations effectively.

9-

In JavaScript, == (loose equality) and === (strict equality) are comparison operators used to compare values. They behave differently in terms of type coercion:
* 		Loose Equality (==):
    * Performs type coercion if the operands are of different types.
    * Tries to convert the operands to the same type before making the comparison.
    * After conversion, it checks equality. 
    Example:'5' == 5; // true (String '5' is coerced to a Number)0 == false; // true (Boolean false is coerced to Number 0)null == undefined; // true
* 		Strict Equality (===):
    * Does not perform type coercion.
    * Compares values and their types without any conversion.
    * Only returns true if both the value and the type are the same.		
    Example:
    '5' === 5; // false (String '5' is not equal to Number 5 in value or type)0 === false; // false (Number 0 is not equal to Boolean false in type)null === undefined; // false (null and undefined have different types)
In general, it's recommended to use === for equality comparisons in JavaScript because it avoids unexpected type coercion and produces more predictable results. When you use ===, you're explicitly checking both the value and the type. If you're not concerned about type coercion and want a more lenient comparison, you can use ==. However, be aware of the potential pitfalls and inconsistencies that can arise due to automatic type conversion.

10-
NaN stands for "Not a Number" in JavaScript. It is a special value that represents an unrepresentable or undefined value in the context of numbers. NaN is often the result of an undefined or non-representable mathematical operation, such as dividing zero by zero or trying to parse a non-numeric string.
The type of NaN is number, which might seem counterintuitive at first. However, in JavaScript, NaN is considered a numeric value because it represents the result of a failed or undefined numeric operation.

- Example:
console.log(typeof NaN); // Output: "number"

let result = 0 / 0;
console.log(result); // Output: NaN
console.log(typeof result); // Output: "number"

It's important to note that NaN is not equal to itself, so you cannot use the regular equality operator (== or ===) to check if a value is NaN. Instead, you should use the isNaN() function or the Number.isNaN() method:

console.log(isNaN(NaN)); // Output: true
console.log(isNaN("Not a Number")); // Output: true (after type coercion)
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN("Not a Number")); // Output: false (no type coercion)

11-
In JavaScript, scope refers to the region of your code where a particular variable is accessible. There are two main types of scope: global scope and local scope.
* 		Global Scope:
    * Variables declared outside of any function or block have global scope.
    * They can be accessed from any part of the code, both inside and outside functions.
* 		Example:
var globalVar = "I'm global";

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

exampleFunction();
console.log(globalVar); // Accessible here as well

Local Scope:
* Variables declared inside a function or a block have local scope.
* They are only accessible within that specific function or block.
Example:
function exampleFunction() {
  var localVar = "I'm local";
  console.log(localVar); // Accessible only within the function
}

exampleFunction();
console.log(localVar); // Throws an error, localVar is not defined outside the function

Scope Chain:
When a variable is accessed in JavaScript, the JavaScript engine looks for that variable in the current scope. If it doesn't find it, it looks in the next outer scope. This process continues until the variable is found or the global scope is reached. This chain of nested scopes is called the scope chain.
Example:

var globalVar = "I'm global";

function outerFunction() {
  var outerVar = "I'm outer";

  function innerFunction() {
    var innerVar = "I'm inner";
    console.log(globalVar); // Accessible (found in the global scope)
    console.log(outerVar); // Accessible (found in the outer scope)
    console.log(innerVar); // Accessible (found in the current scope)
  }

  innerFunction();
}

outerFunction();

In this example, innerFunction has access to variables in its own scope, as well as the outer and global scopes. This is made possible by the scope chain. If a variable is not found in the local scope, it looks up the chain until it finds the variable or reaches the global scope.

12- 

Closures are a powerful and often misunderstood concept in JavaScript. A closure is created when a function is defined inside another function (the outer function), and it has access to variables from its own scope, the scope of the outer function, and the global scope. This inner function "closes over" the variables it references, capturing them and allowing them to persist even after the outer function has finished executing.
Here's a simple example to illustrate closures:
function outerFunction() {
  var outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  return innerFunction;
}

var closureFunction = outerFunction(); // outerFunction is executed, and innerFunction is returned
closureFunction(); // innerFunction is invoked, and it still has access to outerVariable
In this example, outerFunction defines outerVariable and declares innerFunction inside it. The innerFunction is then returned from outerFunction. When outerFunction is executed and returns innerFunction, a closure is created. This closure retains access to outerVariable even though outerFunction has finished executing.
Key points about closures:
* 		Access to Outer Variables:
    * The inner function has access to variables from its own scope, the scope of the outer function, and the global scope.
* 		Data Encapsulation:
    * Closures provide a way to encapsulate data within a function, allowing for private variables that are not accessible from outside the function.
* 		Preservation of State:
    * Closures allow functions to "remember" the environment in which they were created. This is particularly useful for preserving the state of a function across multiple calls.
* 		Lexical Scope:
    * Closures have a lexical scope, meaning they capture the variables from the surrounding code at the time of their creation.
Closures are commonly used in JavaScript for tasks like creating private variables, implementing data hiding, and creating functions with persistent state. Understanding closures is crucial for writing clean and efficient JavaScript code.


13 -

A -
*  Omar

B-
* 		’21’
* 		‘111’
* 		‘111’
* 		‘0’
* 		‘NaN’
* 		‘1ss’
* 		’10’
C-

console.log(x); // Outputs: undefined
var x = 10;
// At this point, x is initialized with 10

console.log(y); // Throws a ReferenceError
let y = 20; // y is declared and initialized with 20
console.log(y); // Outputs: 20
console.log(x); // Outputs: 10


D- 
var obj = {
  name: "Aly",
  f1: function() {
    console.log(this.name);
  },
  f2: () => {
    console.log(this.name);
  }
};

obj.f1(); // Outputs: Aly (using regular function)
obj.f2(); // Outputs: undefined (using arrow function, which doesn't have its own 'this')
