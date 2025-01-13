//Create an object car with properties make, model, and year. 
// Add a method getDetails() that returns a string like:

"This car is a 2021 Toyota Corolla."
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  getDetails: function () {
    return `This car is a ${this.year} ${this.make} ${this.model}`
  }
}
const print = car.getDetails();
// console.log(print);


//Nested Objects
//Create an object student with properties name, age, and marks (an object containing math, science, and english scores).
//Write a method getAverageMarks() to calculate and return the average of the marks.
const students = {
  name: "Harshit",
  age: 24,
  marks: {
    math: 70,
    English: 100,
    science: 70,
  },
  getAverageMarks: function () {
    return (this.marks.math + this.marks.English + this.marks.science) / 3
  }
}
const average = students.getAverageMarks();
// console.log(average);

const team = {
  members: ["johm", "harshit"],
  printMember: function () {
    return this.members.forEach((player) => { console.log(`Team member: ${player}`) })
  }
}
team.printMember();

//  Question   //Advanced: Dynamic this Binding
// Create an object counter with properties count and step and methods:
// increment(): Adds step to count.
// decrement(): Subtracts step from count.
// reset(): Resets count to 0.
// Bind the increment() and decrement() methods to another object and test.