// This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.
var arr, findTwo, pusher, upFront, remover, noMore, copyCat, chopIt, sumIt, evenOdd, timesTen, animal, findAge, getKeys, changeName, speechMaker, addKey, keyLoop, cars, findModels

// Arrays

// 1. Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96
var arr = [12, 42, 36, 51, 96];
// 2. Create a function called findTwo that takes in the arr array and returns the value at index 2.
function findTwo(arr) {
  var output = arr[2];
  return(output);
}
// 3. Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.
function pusher(array, num){
array.push(num);
return(array); 

}
// 4. Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.
function upFront(array, num){
array.unshift(num);
return(array); 

}
// 5. Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.
function remover(array, num){
array.pop(num);
return(array); 

}
// 6. Create a function called noMore that takes in an array and a number and positions the number in beginning of the array. Return the new array.
function noMore(array, num){
array.unshift(num);
return(array); 

}
// 7. Create a function called copyCat that takes in an array, copies, and returns the second and third index values.
function copyCat(array){

 return array.slice(2, 4);

}
// 8. Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.
function chopIt(array, num1, num2){
array.splice(3,1,num1,num2);
return(array); 

}
// 9. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.
function sumIt(array) {
var sum = 0
for (var i = 0; i < array.length; i++) {
sum = sum + array[i];

}
return sum;

}
// 10. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
// Hint: Use the modulus operator

function evenOdd(array) {

var evenOddArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
      evenOddArray.push("even"); 
    }
    else {
      evenOddArray.push("odd");
    }

  }
return evenOddArray;

}


// 11. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
// Hint: Use the map method



function timesTen(array) { 

   var newArray = array.map( function (arrayCell) {return arrayCell*=10;});
    
   return newArray;
  }

// Objects

// 1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.

var animal = {

  species:"mammal",
  name:"grumpy cat",
  age:7,
  gender:"female",
  favoriteFood:"cookies",
  sound:"Meeyoh",
  speech: function() {
    return(animal.sound);

  },


};

// 2. Create a function called findAge that takes in an object and returns the age key value.

function findAge(obj){
  return obj.age;
}

// 3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).

function getKeys(obj){
  
return (Object.keys(obj));


}
// 4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.

function changeName(obj, newName) {

obj.name = newName;
return(obj);
}

// 5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.
function speechMaker(obj) {

output = obj.speech();
return output;
}

// 6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.

function addKey(obj){

obj.bedtime = 10;
return(obj);

}

// 7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".

function keyLoop(obj) {
for (var i = 0 ; i < obj.length - 1; i++) {
      if (obj[i] == "monkey") {

        return("There's a monkey!");

      }
      else  {
        return("There's no monkey here!");

            }
  
  }

}

// Intermediate Arrays and Objects

// 1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.

// 2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.

module.exports = {
  arr: arr,
  findTwo: findTwo,
  pusher: pusher,
  upFront: upFront,
  remover: remover,
  noMore: noMore,
  copyCat: copyCat,
  chopIt: chopIt,
  sumIt: sumIt,
  evenOdd: evenOdd,
  timesTen: timesTen,
  animal: animal,
  findAge: findAge,
  getKeys: getKeys,
  changeName: changeName,
  speechMaker: speechMaker,
  addKey: addKey,
  keyLoop: keyLoop,
  cars: cars,
  findModels: findModels
}
