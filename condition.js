/* 
..................
CONDITIONALS
..................
1. Meaning of: >, <, >=, <=, ==, !=, ===, !==
2. Meaning of &&
3. Meaning of ||
4. Let's say you have x amount of money. if you have more than 80,000, then you buy a mac,
if you more than 60,000 then you will buy gaming laptop, if you more than 40,000 then you will buy Lenevo Yoga, If you have more than 20,000 then you will buy an used laptop, otherwise, you will use mobile phone.

*/
//1. Meaning of: >, <, >=, <=, ==, !=, ===, !== :-
/* 
> = greater than, < = less than, >= = greater than or equal to, 
<= = less than or equal to, == equal to, != = not equal, === equal value and equal type,
!== not equal value or not equal type. 
*/
//2. Meaning of &&:- This is called and. It uses an a condition.
//3. Meaning of ||:- This is called or. It uses an a condition.
//4. Let's say you have x amount of money. if you have more than 80,000, then you buy a mac, if you more than 60,000 then you will buy gaming laptop, if you more than 40,000 then you will buy Lenevo Yoga, If you have more than 20,000 then you will buy an used laptop, otherwise, you will use mobile phone.:-
var myMoney = 79000;
if(myMoney >= 80000){
    console.log('Wow! I buy a Mac');
}
else if(myMoney >= 60000){
    console.log('Wow!! I buy a gaming Laptop');
}
else if(myMoney >= 40000){
    console.log('Wow!! I buy a Lenevo Yoga');
}
else if(myMoney >= 20000){
    console.log('I buy a used Laptop');
}
else{
    console.log('I use a mobile phone');
}