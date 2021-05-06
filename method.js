// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders. 

// ```javascript
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// ```
 const orders = [
 { amount: 250 },
 { amount: 400 },
 { amount: 100 },
 { amount: 325 }
 ];

 const newOrders = [250,400,100,325];
 const totalOrders = newOrders.reduce(function(accumulator, current){
     console.log("total of Amount is", accumulator +current);
     return accumulator + current
 });
 console.log(totalOrders);


// #### 2. Increment by 1
// ```javascript 
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// ``` 
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.


 const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
 const incrementNumbers = (input) => {
    return input.map(resultme => resultme+1 )
 }

 console.log(incrementNumbers(arrayOfNumbers));


 
 


// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers.
//  The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

function filterEvens(x) {
  let result = x.filter(q=> q %2===0)
return   result
};
console.log(filterEvens([1,2,3,11,12,13]))

function filterEvens(y) {
  let result = y.filter(q=> q %2===0)
return   result
};
console.log("task", filterEvens([22,2,31,110,6,13]))





// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function searchByWords(source, word) {
    return source.filter(omg=> omg.includes(word))
}
console.log(searchByWords(friends,"a"));
console.log(searchByWords(friends,"e"));
console.log(searchByWords(friends,"i"));

// ```
// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```

 const sum = [1,2,3,4,5];
 const sumReturn = sum.reduce(function(accumulator, current){
     console.log("total Sum of Excerisce one is ", accumulator +current);
     return accumulator + current
 });
 console.log(sumReturn);


  const sum2 = [6,7,7];
 const sumReturn2 = sum2.reduce(function(accumulator, current){
     console.log("total Sum of Excerisce two is ", accumulator +current);
     return accumulator + current
 });
 console.log(sumReturn2);



// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

