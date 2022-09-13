/* 
..........
Loop 
.........
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days. display then as output
7. Create an array for all the mobile phones. Display all the element of the array by using while loop 
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
9. Write the price of books that you have.  Display the prices if the prices is lower than 200.
10. 

*/

//1. Display "Ajke amar mon valo nei" for 39 times:- 
// display "Ajke amar mon valo nei" for 39 times using while loop
var todayMindSisuation = 1;
while(todayMindSisuation < 40){
    console.log("Ajke amar mon valo nei");
    todayMindSisuation++;
}
// Display "Ajke amar mon valo nei" for 39 times using for loop
for(var i = 1; i <= 39; i++){
    console.log("Ajke amar mon valo nei");
}
//2. Display numbers between 58 to 98:-
// Display using while loop
var number = 58;
while(number <= 98){
    console.log(number);
    number++;
}
// Display using for loop
for(var i = 58; i <= 98; i++){
    console.log(i);
}
//3. Show all even numbers from 412 to 456:-
// I will show all even numbers from 412 to 456 using while loop
var number = 412;
while(number <= 456){
    console.log(number);
    number += 2;
}
// I will show all even numbers from 412 to 456 using for loop
for(var i = 412; i <= 456; i+=2){
    console.log(i);
}
//4. Show all odd numbers 581 to 623:-
// I will show all odd numbers 581 to 623 using while loop:
var number = 581;
while(number <= 623){
    console.log(number);
    number += 2;
}
// I will show all odd numbers 581 to 623 using for loop:
for(var i = 581; i <= 623; i+=2){
    console.log(i);
}
//5. Difference between while loop and for loop:-
// The major difference between for loop and while loop is that in the case of for loop the number of iterations is known whereas in the case of the while loop number of iterations is unknown and the statement will run until the condition is proved false.
//6. Declare an array for all the topics that you have learned last few days. display then as output:-
var learnAllTopics = ["HTML3", "HTML5", "CSS", "CSS3", "Bootstrap", "Tailwind"];
console.log(learnAllTopics);
//7. Create an array for all the mobile phones. Display all the element of the array by using while loop:-
var usesMobilePhone = ["Micromax", "Nokia", "Waltan", "Vivo", "Symphony"];
var allMobilePhone = usesMobilePhone[0];
while(usesMobilePhone <= allMobilePhone[5]){
    console.log(usesMobilePhone);
    allMobilePhone++;
}
//8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44:-
// Run a loop from 30 to 86. this loop will stop when the value get higher than 44 using while loop.
var number = 30;
while(number <= 86){
    if(number > 44){
        break;
    }
    console.log(number);
    number++;
}
// Run a loop from 30 to 86. this loop will stop when the value get higher than 44 using for loop.
for(var i = 30; i <= 86; i++){
    if(i > 44){
        break;
    }
    console.log(i);
}
//9. Write the price of books that you have.  Display the prices if the prices is lower than 200:-
// Display the prices if the prices is lower than 200 usning for loop.
var bookPrice = [100, 160, 183, 300, 120, 200, 155, 230, 180, 322,190];
for(var i = 0; i < bookPrice.length; i++){
    var allPrices = bookPrice[i];
    if(allPrices >= 200){
        continue;
    }
    console.log(allPrices);
}