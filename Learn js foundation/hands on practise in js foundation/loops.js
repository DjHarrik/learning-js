/**
 * Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers
 *
 */
function sumOfN(n){
    let num=0;
    for (let i=1;i<=n;i++){
        num=i+num;

    }
    return num
}
// console.log(sumOfN(40))

/**
 * Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. 
Values return in the array must be of the format 2 * 2 = 4
 */

function printMultiplicationTable(n){
    let table =[];
    for(let i=1;i <= 10;i++){
         table.push(n + ' * ' + i +' = '+i*n )
        
    }
    return table
}
// console.log(printMultiplicationTable(10))

/**
 * Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels 
(in both lower & uppercase) in the given string str.
 */
//short
function countVowels(str){
   let vowels = /[aeiouAEIOU]/g;
   let arr = str.match(vowels);
   return arr ?arr.length:0;   
}

// console.log(countVowels("harshitKUMAR"));
// console.log(countVowels(""))

function countVowels1(str){
const storeStr = [];
for(let i=0;i < str.length;i++){
    if(str.charAt(i) =="a" || str.charAt(i) == "e" || str.charAt(i) =="i" || str.charAt(i) =="o" || str.charAt(i) =="u" || str.charAt(i)== "A" || str.charAt(i)== "E" || str.charAt(i)== "I" || str.charAt(i)== "O" || str.charAt(i)== "U" ){
        storeStr.push(str.charAt(i))
    }
}
const numberOfVowels=  storeStr.length;
return numberOfVowels
}
console.log(countVowels1("harshitKUMAR"))
console.log(countVowels1("hrshtKMR"))


/**
 * 
 */