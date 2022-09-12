/* 
.......................
         VARIABLE
........................
1. What is JavaScript?
2. How does JavaScript work?
3. What is variable?
4. Declare a variable
5. Types of variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JavaScript variable
8. Math Operation +, -, *, /, %
9. Short hand: +=, -=, *=, /=
10. ++, --
11. parseInt(), parseFloat()
12. toFixed()
 */  

//1. What is JavaScript:- JavaScript is a high level, iterpreted programming language used to make web pages more interactive. It let's implement complex and beautiful things / design on web pages.
// 2. How does JavaScript work:- JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.
//3. What is variable:- A variable is value that can change depending conditions or on information passed to the program.
//4. Declare a variable:- var number = 12;
//5. Types of variable? How can you find out type of a variable:- Numeric types, String types, Boolean types, null and undefined. i can find out type of a variable. Exmaple:
/* var number = 20;
console.log(typeof number);
var myName = 'Gautam Sen';
console.log(typeof myName); */
//6. Primitive and non-primitive data types:- 
/* 
Primitive Date types: 1. Number, 2. String, 3. Boolean, 4. Null, 5. Undifined
Non-Primitive Data types: 1. Objects, 2. Array, 3. Function
 */
//7. Naming Convention of JavaScript variable:- 
/* 
1. Variable name can not be any keywords.
2. Variable name has to  be in one word. No speace.
3. Variable name can not have quotation.
4. Variable name can not starts with a number but can ends with a number.
5. Variable long is Camel Case.
6. Keyword case sensitive.
7. Variable name is Case sensitive.
*/
//8. Math Operation +, -, *, /, %:-
var num1 = 31;
var num2 = 10;
var mathAdditon = num1 + num2;
var mathSubtraction = num1 - num2;
var mathMultiplication = num1 * num2;
var mathDivision = num1 / num2;
var mathRemainder = num1 % num2;
//9. Short hand: +=, -=, *=, /= :-
var number = 20;
number += 1;
number -= 1;
number *= 2;
number /= 2;
//10. ++, -- :-
var number = 31;
number++;
number--;
//11. parseInt():-
var number = '13';
console.log(number);
var numberIntiger = parseInt(number);
console.log(numberIntiger);
var num1 = 0.1;
var num2 = 0.2;
var sumNumber = num1 + num2;
console.log(sumNumber);
//toFixed()
sumNumber = sumNumber.toFixed(1);
console.log(sumNumber);
// parseFloat():-
var sumTwoDecimal = parseFloat(sumNumber);
console.log(sumTwoDecimal);