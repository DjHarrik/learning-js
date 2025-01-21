/**
 * Task 1: Using this in Objects

Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in 
Hi, my name is Hashit and I am 24 years old on calling introduce()
 */

const person = {
    name :"Harshit",
    age  :24,
    introduce : function(){
        return `Hi, my name is ${this.name} and I am ${this.age} years old `
    }
}
// console.log(person.introduce())

/**
 * Task 2: Function within a function

Write a function outer() that contains another function inner() 
and returns a value of 'Inner function called' on calling outer()
 */

function outer(){
    function inner(){
        return 'Inner function called'
    }
    return inner();

}
console.log(outer())
