/**
 * Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions
 */
const squareNumbers = (arr) => {
      
    return arr.map(((x) => x * x))
   
   }
//  console.log(squareNumbers([8]))

 /**
  * Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions
  */

const filterEvenNumbers = (arr) =>{
    return arr.filter( (num) => num % 2 === 0 )
}
//   console.log(filterEvenNumbers([8,7,2,3,4,5,6,7,8,9,10]))

/**
 * Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array
of numbers and returns the sum of all positive numbers using
filter() and reduce() with arrow functions
 */

const sumPositiveNumbers = (arr) =>{
    let sum = arr.filter((num) => num > 0);
    let total = 0;
    let sumofNumber = sum.reduce((accumalater,currentIndex) => accumalater + currentIndex,total)
    return sumofNumber;
}
// console.log(sumPositiveNumbers([-1,6,1,2,3,-1]));



/**
 * Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
 */

const getNames = (arr) =>{
    const names = arr.map((user) => user.name);
    return names
}

// console.log(getNames([
// {  name : "h"},
// {  name:"hh" }
// ]))


/**
 * Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
 */

const findLongestWord = (arr) =>{
    let findlongestStr = arr.reduce((accMULATER,currentINDEX) => {
        if( accMULATER.length < currentINDEX.length){
            return currentINDEX
        }return accMULATER
    },"")
    return findlongestStr
}
console.log(findLongestWord(["pinapple","apple","cheery","",""]))