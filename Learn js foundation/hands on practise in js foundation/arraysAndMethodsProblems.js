/**
 * Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array
 */

const filterNumber = (arr) =>{    
    const system=arr.filter((num) =>typeof num==="number")
    return system;
}
// console.log(filterNumber([1,2,"w","2"]))


/**
 * Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array
 */

const reverseArray = (arr) =>{   
        return arr.reverse();
}
// console.log(reverseArray([1,2,"q"]))


/**
 * Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array
 */
function findMax(arr) {
    let max = arr[0];
    for(let i = 1;i < arr.length;i++)
        {
        if(arr[i] > max){
            max = arr[i];                       
            }
        }    
    return max;
}
// console.log(findMax([1,2,3,4]))

/**
 * Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
 */

 function removeDuplicates(arr){
    let arrayStore = [];
    for(let i = 0; i< arr.length;i++){
        if(!arrayStore.includes(arr[i])){
            arrayStore.push(arr[i])
        }
    }
    return arrayStore
 }
//  console.log(removeDuplicates([2,1,1,1,1,1,1,1,2]))
  
/**
 * Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
 */

function flattenArray (arr){
    return arr.flat(Infinity)
}
// console.log(flattenArray([1,[2,[3,[4,5]]]]))
/**
 * 
 */