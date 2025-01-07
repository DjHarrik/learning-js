/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
   */
//    let array =["green tea", "black tea", "chai", "oolong tea"];
//    let selectedTeas = [];
//    for (let index =0; index < array.length; index++){
//       if(array[index] === "chai"){
//          break;
//       }
//       selectedTeas.push(array[index]);

//    }
//   console.log(selectedTeas)




/*



2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

// let array1 = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// // for (let i = 0; i < array1.length;i++){
// //    if(array1[i] ==="Paris"){
// //       continue;
// //    }
// //    visitedCities.push(array1[i])
// // }
// for(let i = 0;i < array1.length;i++){
//    // if(array1[i]!=="Paris"){
//    //    visitedCities.push(array1[i])
//    // }
//    // visitedCities = array1.filter((city) => city !== "Paris") 
// }
// console.log(visitedCities);





/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

// const array = [1, 2, 3, 4, 5];
// let smallNumbers = []
// for ( let number  of array){

//    if(number === 4){      
// break;      
//    }
// smallNumbers.push(number)
//    console.log(smallNumbers)


// }


/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

// const array = ["chai", "green tea","herbal tea","black tea"];
// const preferredTeas = [];
// for (let store of array){
//    // if(store === "herbal tea"){
//    //    continue
//    // }
//    // preferredTeas.push(store)

//    // console.log(preferredTeas)
//    if(store !== "herbal tea"){
//    preferredTeas.push(store)
//    }
//    console.log(preferredTeas)

// }


/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/
// const citiesPopulation = {
//    "London" :890000,
//    "New York" : 840000,
//    "Paris" : 2200000,
//    "Berlin" : 3500000
// }
// const cityPopulations = [];
// for(let value in citiesPopulation ){
//    if(value === "Berlin" ){
//       continue; 
//    }
//    cityPopulations[value] =citiesPopulation[value];

// }
// console.log(cityPopulations)




/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */

// const array ={
//    "Sydney" : 5000000,
//    "Tokyo": 9000000,
//    "Berlin" : 3500000,
//    "Paris" : 2200000
// }
// const largeCities =[]; // array
//  for (let store in array){
//    if(array[store] > 3000000){
//    //   
//    largeCities.push(store);
//    console.log(largeCities)
//    }
//  }
//  const array ={
//    "Sydney" : 5000000,
//    "Paris" : 2200000,

//    "Tokyo": 9000000,
//    "Berlin" : 3500000,
// }
//  const largeCities = {}; // object
//  for (let store in array){
//    if(array[store] > 3000000){

//       largeCities[store] = array[store];
//       console.log(largeCities)

//    }
//  }


/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/


// const array = ["earl grey", "green tea", "chai", "oolong tea"];
// const availableTeas = [];

// array.forEach(store => {

//    if (store === "chai") {
//       return;
//    }
//    availableTeas.push(store)
// });
// console.log(availableTeas)

// console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

// const array = ["Berlin", "Tokyo", "Sydney", "Paris"];
// const traveledCities = [];

// array.forEach(function (store) {

//    if (store === "Sydney"){
//       return;
//    }
//    traveledCities.push(store)
   
// })
// console.log(traveledCities);



/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

// let array =[2, 5, 7, 9];
// let doubledNumbers = [];

// for(let i = 0; i < array.length; i++){
//    if(array[i] === 7){
//       continue ;
//    }
//    let multi = array[i] * 2;
//    doubledNumbers.push(multi)

// }
// console.log(doubledNumbers)


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

const array =["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
const shortTeas = [];
for(let small of array){
   if(small.length < 10){
      shortTeas.push(small)
      console.log(shortTeas)
   }
}
