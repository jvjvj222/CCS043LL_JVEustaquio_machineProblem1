// console.log('hello')
// Writing Comments in JavaSripts
	// - single comment - ctrl + /
	/*
		multiline comments - ctrl + shift + /
	*/
/*
	JavaScript
		- we can see or log messages in our console

		- consoles are part of our browser which will allow us to see/log messages, data or information from our programming language
	statements
		- are instruction, expressions we add to our programming language which will be communicated to our computers
		- it commonly ends in semi-colon(;). Semi-colons in JS are most commonly used to mark the end of the statement
	syntax
		- in programming, this is a set of rules that describes how statements are properly made/constructed



*/
console.log('FEU');

// Variables
/*
	In HTML, elements are containers of other elements and text.
	In JavaScript, variables are containers of data. A give name to describe a piece data
*/
// num is our variable name
// 10 being value/data
let num = 10;

console.log(num);

let name = 'Jeffrey';
console.log('Gymeul');
console.log(name)

/*
	To create a variable there are 2 steps:
		- Declaration
			- actually allows us to create a variable name
		- Initialization

*/

let age;
console.log(age)//underfined
/*
	We cab create variables without an initial value. However, when logged into the console, the variable will return a valued of 'undefined'

	undefined is a data type that indicates that variable does not exist, however there was no initial value
*/
/*
	you can always initialize a variable after declaration by assigning a value to the variable with the use of assignment operator (=)

	initializing the variable
	syntax:
		my variableName = initialValue
*/
let age1 = 25;
console.log(age1)

/*
	console.log(myVariable)
	let myVariable = 'Another sample';
	
	Can you use or refer to a variable that has not been declared or created?
		NO. This will result in an error: Not Defined

	Undefined vs Not Defined
	Undefined means a variable has been declared but there is no initial value
		- undefined is a data type
	Not Defined means that the the variable you are trying to refer or access does NOT exist
		- Not Defined is an error

	Variable must be declared first before they are used, referred to or accesed
	using referring to or accessing a variable before it's been declared results to an error
*/

// let or const
/*
	with the use of let, we can create variables that can declared, initialized and re-assigned

	In fact, we can declare let variables and initialize after
*/

let bestFinalFantasy;
bestFinalFantasy = "Final Fantasy 6";
console.log(bestFinalFantasy);
// re-assigning let variables

bestFinalFantasy = "Final Fantasy 7";
console.log(bestFinalFantasy);

bestFinalFantasy = 'Final Fantasy 10';
console.log(bestFinalFantasy);

// const keyword or const variables are with constant data. Therefore, we should not re-declare, re-assing or even declare a constant variable without initialization
const pi = 3.1416
console.log(pi)

const numA = 1;
console.log(numA)

// Can you re-assign another value to a const variable? NO. You cannot and should not re-assign values to a const variable. Because it results to an error

// const variables are used for data that we expect or do not want its value to change

/*
	Guidelines on Variables Names
		1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains
			let firstName = 'Michael' - good variable name
			let pokemon = 25000; - bad variable name
		2. When naming variables, it is better to start with lowercase letter. We usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter
			let FirstName = 'Juan' - bad variable name
			let firstName = 'Juan' - good variable name
		3. Do not add spaces to you variable names.  Use camelCase for multiple words or underscores
			let first name = 'Juan'

			camelCase is when we have first word in small caps and the next word added without space but the first letter is capitalized
				lastName emailAddress mobileNumber

			underscores sample:

			let product_description = 'lorem ipsum'

			let product_id = 100021
*/
let num_sum = 5000
console.log(num_sum)
let numSum = 6000
console.log(numSum)

// declaring multiple variables

let brand = 'Toyota', model = 'Vios', type = 'Sedan';
console.log(brand)
console.log(model)
console.log(type)
// console logging multiple variables: use commas to seperate each variable
console.log(brand, model, type)

/*
	Data tyoes

	In most programming languages, data is differentiated by their types. For most programming languages, you have to declare not only variables but also the type of data you are saving into a variable, howerver, JS does not require this.

	To create data with particular data types, some data types require adding with literal.
		string literals = '', "" and most recently: ``(template literal)
		object literals = {}
		array literals = []
*/
// String
/*
	Strings are series of alphanumeric characters that create a word, a phrase, a name or anything related to creating text

	string literals such as ''(single quotes) or "" (double quotes) are used too write or create strings
*/

let country = 'Philippines';
let province = "Laguna";

console.log(country)
console.log(province)

//Concatenation is a process/operation wherein we combine two strings as one. Using the plus (+)

// JavaScript strings, spaces are also counted as characters

let firstName = 'Jungkook';
let lastName = 'Jeon'

console.log(firstName + ' ' + lastName)
//firstName and lastName variables and the ' ' were combined into a single string, however, the result was not saved.

let fullName = firstName + ' ' + lastName
console.log(fullName)

 
  let word1 = "is";
  let word2 = "student";
  let word3 = "of";
  let word4 = "School";
  let word5 = "Far Eastern";
  let word6 = "a";
  let word7 = "University";
  let word8 = "Alabang";
  let space = " ";
  let dash = "-"

let sentence = name + space + word1 + space + word6 + space + word2 + space + word3 + space + word4 + dash + word5 + space + word7 + space + word8 + ".";
console.log(sentence);