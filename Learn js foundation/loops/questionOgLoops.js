"use strict";

/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
 

// let sum = 0;
// let i= 1;

// while (i<=5) {

//   sum= sum +i;
//   i++;
  
// }
// console.log(sum)



/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

// let countdown = [];
// let i = 5;

// while(i>0){

//   countdown.push(i)
//   i--;


// }
// console.log(countdown);

 

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
 
// let teaCollection =[];
// let tea ;

// do{
// tea = prompt(`enter their favorite tea type until they enter "stop"`)
// if(tea !== "stop"){
//   teaCollection.push(tea);
// }
// }while(tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

// let total = 0; 
// let i = 1;
// do {
//   total = total + i
//   i++
//   console.log(total)
// } while (i <=3);


/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and
 stores the results in a new array named `multipliedNumbers`.
*/

//  let array = [2,4,6];
//  let multipliedNumbers = [];

//  for(let i = 0; i < array.length; i++){

//   let numberStore = array[i] * 2;
//   multipliedNumbers.push(numberStore);
//   console.log(multipliedNumbers);
  

//  }



/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and
 stores each city in a new array named `cityList`.
*/

 let array = [ "Paris", "New York","Tokyo", "London"];

let cityList =[];
let shiftCity ;
 for ( let i = 0; i<array.length;i++){
  shiftCity = array[i];
  cityList.push(shiftCity);
  console.log(cityList);
  
 }
