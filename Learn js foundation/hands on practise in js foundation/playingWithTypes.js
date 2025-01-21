/**Task 1:

Write a function stringToNumber that takes a string input and
tries to convert it to a number. If the conversion fails, return "Not a number". */

function stringToNUmber(input) {
    let stringInput = input;
    console.log(typeof stringInput)

    
    if (!isNaN(stringInput)){
        let convertStringInput = Number(stringInput);
        console.log(typeof convertStringInput)
    return convertStringInput
    }
    return "Not a number"

}
// console.log(stringToNUmber("123"));
// console.log(stringToNUmber("abc"));

/**Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc. */

function flipBoolean(input){
    let flipBooleanNum = Boolean(input)
    if(flipBooleanNum === true){
        return false
    }
    return true
}
// console.log(flipBoolean(0));
// console.log(flipBoolean("a"))
// console.log(flipBoolean(true));
// console.log(flipBoolean(false));

/**
 * Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */

function whatAmI(input){
    console.log(typeof input)
    let element = String(input)  ;
    console.log(typeof element)

    if(!isNaN(Number(element))){
        return  "I'm a number!"
    }  
    return "I'm a string!"
}
// console.log(whatAmI("abc")); // I'm a string!
// console.log(whatAmI("123"))  // I'm a number!
// console.log(whatAmI(123)) // I'm a number!
// console.log(whatAmI(null)); 

/**
 * Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
 */

function isItTruthy(input){
    // const truthy = Boolean(input)
    // if(truthy === true)
    if(input){ 
        return "It's truthy!"
    }else{
        return "It's falsey!"
    }
}
// console.log(isItTruthy(1));
// console.log(isItTruthy(true));
// console.log(isItTruthy([]));
// console.log(isItTruthy({}));
// console.log(isItTruthy("A"));
// console.log(isItTruthy("1"));

// console.log(isItTruthy(false));
// console.log(isItTruthy(NaN))
// console.log(isItTruthy(0));
// console.log(isItTruthy(null));
// console.log(isItTruthy(""));
// console.log(isItTruthy(undefined));






