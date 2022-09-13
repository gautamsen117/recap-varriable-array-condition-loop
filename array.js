/* 
.............
ARRAY 
.............
1. What is the purpose?
2. How to declare an array in JavaScript
3. Number of elements in an Array
4. What is index?
5. Find the value of an element by index
6. Change an element by index
7. Get the index of an element by the value
8. What does it mean when you get undefinied while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11. Add an element at the firts position of an array
12. Remove the first element of an array
*/
//1. What is the purpose:-
//The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.
//2. How to declare an array in JavaScript:- 
var myBooks = ['Physics', 'Chemisty', 'Math', 'English', 'Bangla'];
//3. Number of elements in an Array:- 
var myBooks = ['Physics', 'Chemisty', 'Math', 'English', 'Bangla'];
console.log(myBooks.length);
//4. What is index:-
//The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found. index start 0.
var myBooks = ['Physics', 'Chemisty', 'Math', 'English', 'Bangla'];
var indexBooks = myBooks.indexOf('english');
console.log(indexBooks);
//5. Find the value of an element by index:-
var myBooks = ['Physics', 'Chemisty', 'Math', 'English', 'Bangla'];
var indexElement = myBooks[0];
console.log(indexElement);
//6. Change an element by index:-
var myBooks = ['Physics', 'Chemisty', 'Math', 'English', 'Bangla'];
myBooks[0] = 'Philosophy';
console.log(myBooks);
//7. Get the index of an element by the value:-
var myBooks = ['Physics', 'Chemistry', 'Math', 'English', 'Bangla'];
var valueIndex = myBooks.indexOf('Chemistry');
console.log(valueIndex);
//8. What does it mean when you get undefinied while getting the value of an element by index:- 
//In computing (particularly, in programming), undefined value is a condition where an expression does not have a correct value, although it is syntactically correct. An undefined value must not be confused with empty string, Boolean "false" or other "empty" (but defined) values.
//9. How can you add an element to an array at the last position:-
var myTable = ['laptop', 'book', 'mouse', 'notebook', 'pen', 'calender'];
myTable.push('programming book');
console.log(myTable);
//10. How can you remove the last element from array:-
var myTable = ['laptop', 'book', 'mouse', 'notebook', 'pen', 'calender'];
myTable.pop();
console.log(myTable);
//11. Add an element at the firts position of an array:-
var number = [12, 22, 34, 45, 227];
console.log(number);
number.unshift(111);
console.log(number);
//12. Remove the first element of an array:-
var cookElement = ['banana', 'potato', 'rice', 'onion'];
console.log(cookElement);
cookElement.shift();
console.log(cookElement);