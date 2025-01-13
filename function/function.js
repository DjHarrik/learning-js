/* 
1. Write a function named `makeTea` that takes one parameter,
 `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

// function makeTea(typeOfTea){    
//     return `Making ${typeOfTea}`;     
// }
// const teaOrder = makeTea("green tea")
// // console.log(teaOrder)



/* 
2. Create a function named `orderTea` that takes one parameter,
 `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

//   function orderTea(teaType){
//     function confirmOrder(){
//         return`"Order confirmed for chai"`;
//     }
//     return confirmOrder();
//   }
//   const greet = orderTea("samoa")
//   console.log(greet);


/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

//   const calculateTotal = (price , quantity) => {
//     return (`${price}` * `${quantity}`) // //return price * quantity
//   }
//   const totalCost=calculateTotal(10,4);
//   console.log(totalCost);

// const calculateTotal =(price,quantity) => price * quantity;// if we want to return the single thing than we write like this
// const greet = calculateTotal(12,23);
// console.log(greet);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
// function makeTea(tea) {
//     return `name of ${tea}`
// }

// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey");

// }
// const greet = processTeaOrder(makeTea)
// console.log(greet);


/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
        return  function (teaType){
            return `Making ${teaType}`;
    
        };
 }

 
let teaMaker =  createTeaMaker();
// console.log(teaMaker("lemon tea"));

//The reason why console.log(teaMaker) does not print the expected result is that teaMaker is a function. When you call createTeaMaker(), it returns a function (the inner function), and assigning it to teaMaker means teaMaker is now a reference to that inner function—not the result of executing it.

function printMultiplicationTable(str) {
    let multi = [];
    let numberofvowels = [];
    for (let i=0; i<str.length ; i++){
    if(str.charAt(i) =="a" || str.charAt(i) == "e" || str.charAt(i) =="i" || str.charAt(i) =="o" || str.charAt(i) =="u" || str.charAt(i)== "A" || str.charAt(i)== "E" || str.charAt(i)== "I" || str.charAt(i)== "O" || str.charAt(i)== "U" ){
      multi.push(str.charAt(i));
      
    }
       
    }
    numberofvowels = multi.length
    

  return numberofvowels ;
  }
  console.log(printMultiplicationTable("h123qweeeaArshitu"))