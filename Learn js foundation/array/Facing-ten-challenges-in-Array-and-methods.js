/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
 
/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
// const cities =["London","Tokyo","paris","New York"];
// const favoriteCity = cities[2]
// console.log(favoriteCity);
 
/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
//   const teaTypes = new Array("herbal tea", "white tea",  "masala chai")
//  teaTypes.pop();
//  console.log(teaTypes)
//  teaTypes.push("jasmine tea");
//  console.log(teaTypes)
 
/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
// 
// const citiesVisited = new Array("Mumbai" , "Sydeney");
// citiesVisited.push("Berlin"); 
// console.log(citiesVisited)
// citiesVisited[citiesVisited.length] = "delhi"

// console.log(citiesVisited)

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
 
// const teaOrders = new Array("chai", "iced tea", "matcha", "earl grey");
// const lastOrder = teaOrders.pop();
// console.log(lastOrder);

 
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
 let popularTeas = new Array("green tea", "oolong tea",   "chai") 
 let copy = popularTeas;

 //copy is assigned directly to popularTeas, creating a reference copy, 
 //meaning both copy and popularTeas point to the same array in memory.
//  console.log(copy);

 //Creates a shallow copy of popularTeas. It produces a new array 
 //with the same elements.
//  let softCopyTeas = Array.from(popularTeas);
//  let slicepopularTeas = popularTeas.slice();
//  let spreadoperatorpopularTeas = [...popularTeas]
//  console.log(softCopyTeas);


//  popularTeas.pop();
// reference copy
//  console.log(popularTeas);
//  console.log(copy);

 // shallow copy
//  console.log(slicepopularTeas);
//  console.log(spreadoperatorpopularTeas); 
//  console.log(softCopyTeas);

 //For a true deep copy, you'll need to use libraries like Lodash or techniques like 

 //JSON.parse(JSON.stringify(array)).
 
/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

// const topCities = new Array("Berlin", "Singapore", "New York")
// const SpreadOperaterHardCopyCities = [...topCities];
// const sliceHardCopy = topCities.slice();
// const hardCopyCities = Array.from(topCities);

// topCities.pop();
// topCities.push("delhi");

// console.log(topCities);
// console.log(SpreadOperaterHardCopyCities);
// console.log(sliceHardCopy);
// console.log(hardCopyCities);




/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
 
// const europeanCities = ["paris" ,"Rome"];
// const asianCities = ["Tokayo", "Bangkok"];

// const worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

 

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

// const teaMenu = new Array("masala chai", "oolong tea", "green tea", "earl grey");
// const menuLength = teaMenu.length;
// console.log(menuLength);

 
 
/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/ 
//  const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

//  //Use includes() if you just want to check for existence.
//   console.log(cityBucketList.includes("London"));

// //Use indexOf() or findIndex() to find the index.
//  const checkOnIndex = cityBucketList.indexOf("London");
//   console.log(checkOnIndex);
 
//   // slice is use for take the london out actually it makes the copy
//  const isLondonInList = cityBucketList.slice(1,2)
//  console.log(isLondonInList);
 

//  //Use find() if you want the value.
//  const filterLondon =  cityBucketList.find((city) => city==="London");
//  console.log(filterLondon);

//  console.log(cityBucketList)
 

