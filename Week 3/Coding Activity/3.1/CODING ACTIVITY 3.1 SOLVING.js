/*
Basic Types activity
- Create 3 variables and set them up to the given instructions. Also, type check them with the typeof operator in the console.
*/
//your code here
///////////////////////////////////
var myFirstName = "Anandhabala";
var numberOfCities = 10;
var havingFun = true;
//check results in browser console
console.log('myFirstName: ', myFirstName);
console.log('numberOfCities: ', numberOfCities);
console.log('havingFun: ', havingFun);

// Do not edit code past this point
if (typeof module !== 'undefined') {
  console.log(typeof myFirstName);
  console.log(typeof numberOfCities);
  console.log(typeof havingFun);
  module.exports = { myFirstName, numberOfCities, havingFun };
}