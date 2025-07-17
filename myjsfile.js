console.log("hello");
console.log(55+55);
//alert("Hi there!");
//prompt("hello how are you?");
console.log(Math.random());
console.log(Math.floor(Math.random() * 100));

let firstname="mar'y";  // local scope
var num1=123; //global scope
const nochange=123;

let firstname2='mar"y';

let lang='javascript';
let mess=`this ${lang} is crazy`;    // SEE THE SYMBOL USE -- (````) NOT (''). NEAR ~
console.log(mess);                  //BACKTICKS USED

let language = "JavaScript";
 let message = `Let's learn ${language}`;
 console.log(message);


 let str = "Hello, what's your name? Is it \"Mike\"?";
 console.log(str);
 let str23 = 'Hello, what\'s your name? Is it "Mike"?';
 console.log(str23);

 let str3 = "New \nline.";
 let str4 = "I'm containing a backslash: \\!";
 console.log(str3);
 console.log(str4);

 let intNr = 1;
 let decNr = 1.5;
 let expNr = 1.4e15;
 let octNr = 0o10; //decimal version would be 8
 let hexNr = 0x3E8; //decimal version would be 1000
 let binNr = 0b101; //decimal version would be 5

  let bigNr = 90071992547409920n;  //big int , add 'n' , bigger than normal datatype

 let bool1 = false;
 let bool2 = true;

  let str1 = "JavaScript is fun!";
 let str2 = "JavaScript is fun!";
 console.log("These two strings are the same:", str1 === str2);

  let sym1 = Symbol("JavaScript is fun!");
 let sym2 = Symbol("JavaScript is fun!");
 console.log("These two Symbols are the same:", sym1 === sym2);   //false, as sym1 and sym2 different variables. even though same.

 let terribleThingToDo = undefined;
 let lastName;
 console.log("Same undefined:", lastName === terribleThingToDo);
 let betterOption = null;
 console.log("Same null:", lastName === betterOption);


  testVariable = 1;
 variableTypeTest1 = typeof testVariable;
 variableTypeTest2 = typeof(testVariable);
 console.log(variableTypeTest1);
 console.log(variableTypeTest2);

 let str33 = "Hello";
 let nr = 7;
 let bigNr1 = 12345678901234n;
 let bool = true;
 let sym = Symbol("unique");
 let undef = undefined;
 let unknown = null;
 
console.log("str", typeof str33);
 console.log("nr", typeof nr);
 console.log("bigNr", typeof bigNr1);
 console.log("bool", typeof bool);
 console.log("sym", typeof sym);
 console.log("undef", typeof undef);
 console.log("unknown", typeof unknown);




  let nra1 = 2;
 let nra2 = "2";
 console.log(nra1 * nra2);

 let nr1 = 2;
 let nr2 = "2";
 console.log(nr1 + nr2);


  let nrToStr = 6;
 nrToStr = String(nrToStr);
 console.log(nrToStr, typeof nrToStr);
 
let strToNr11 = "12";
 strToNr11 = Number(strToNr11);
 console.log(strToNr11, typeof strToNr11);
 
let strToBool11 = "any string will return true";
 strToBool11 = Boolean(strToBool11);
 console.log(strToBool11, typeof strToBool11);




  let nullToNr = null;
 nullToNr = Number(nullToNr);
 console.log("null", nullToNr, typeof nullToNr);
 
let strToNr = "";
 strToNr = Number(strToNr);
 console.log("empty string", strToNr, typeof strToNr);



  let strToNr2 = "hello";
 strToNr2 = Number(strToNr2);
 console.log(strToNr2, typeof strToNr2);




 let strToBool2 = "false";
 strToBool2 = Boolean(strToBool2);
 console.log(strToBool2, typeof strToBool2);//TRUE

 let strToBool = "";
 strToBool = Boolean(strToBool);
 console.log(strToBool, typeof strToBool);


 let nr14 = 2;
 let nr25 = 3;
 let result1 = nr14 ** nr25;
 console.log(result1); //EXPONENT



 let nr1d = 10;
 let nr2d= 3;
 let result1d = nr1d % nr2d;
 console.log(`${nr1d} % ${nr2d} = ${result1}`);
 
let nr3d = 8;
 let nr4d = 2;
 let result2 = nr3d % nr4d;
 console.log(`${nr3d} % ${nr4d} = ${result2}`);
 
let nr5 = 15;
 let nr6 = 4;
 let result3 = nr5 % nr6;
 console.log(`${nr5} % ${nr6} = ${result3}`);


  let nr1r = 4;
 nr1r++;
 console.log(nr1r);
 let nr2r = 4;
 nr2r--;
 console.log(nr2r);


let nr187 = 4;
 let nr287 = 5;
 let nr387 = 2;
 console.log(nr187++ + ++nr287 * nr387++);


//x **= 2;



/*
 arr3 = new Array(10);     //array with 10 undefined values
 arr4 = [10];   //array with 1 value which is 10.
*/

  let arr = ["hi there", 5, true];
 console.log(typeof arr[0]);
 console.log(typeof arr[1]);
 console.log(typeof arr[2]);

 const arr3 = ["hi there"];
 arr[0] = "new value";
 console.log(arr3[0]);

  cars = ["Toyota", "Renault", "Volkswagen"];
 console.log(cars[0]);
  cars[0] = "Tesla";
 console.log(cars[0]);
  console.log(cars);

  cars[3] = "Kia";  //do not exist
  cars[-1] = "Fiat";
   console.log(cars[3]);
 console.log(cars[-1]);


 colors = ["black", "orange", "pink"]
 booleans = [true, false, false, true];
 emptyArray = [];
 console.log("Length of colors:", colors.length);
 console.log("Length of booleans:", booleans.length);
 console.log("Length of empty array:", emptyArray.length);

  lastElement = colors[colors.length - 1];


   numbers = [12, 24, 36];
 numbers[5] = 48;
 console.log(numbers.length);  ///2 undefined elements



colors2 = ["black", "orange", "pink"]
 booleans2 = [true, false, false, true];
 emptyArray2 = [];
 console.log("Length of colors:", colors2.length);
 console.log("Length of booleans:", booleans2.length);
 console.log("Length of empty array:", emptyArray2.length);


 numbers4 = [12, 24, 36];
 numbers4[5] = 48;
 console.log(numbers4.length);

  console.log("numbers4", numbers4);

  /*78*/







 favoriteFruits = ["grapefruit", "orange", "lemon"];
 favoriteFruits.push("tangerine");
  let lengthOfFavoriteFruits = favoriteFruits.push("lime");
  console.log(favoriteFruits);  //The push method returns the new 
//length of the array, four in this case. 

   let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
 arrOfShapes.splice(2, 0, "square", "trapezoid");
 console.log("first",arrOfShapes); 
 /*The splice() method takes multiple parameters. The 
f
 irst parameter, 2 in our case, is the index of the array on which we want to start 
inserting. The second parameter, 0 in our case, is the number of elements we want to 
delete starting at our previously defined starting index. The parameters after these 
f
 irst two, square and trapezoid in our case, are whatever should be inserted starting 
at the start index.*/


 arrOfShapes.splice(2, 3, "new one", "new two");   //3 deleted
 console.log("2nd",arrOfShapes);


 arrOfShapes.splice(2, 12, "new three", "new four");
 console.log("3rd",arrOfShapes);

  


 let arr5 = [1, 2, 3];
 let arr6 = [4, 5, 6];
 let arr7 = arr6.concat(arr5);
 console.log(arr7);

  let arr8 = arr7.concat(7, 8, 9);
 console.log(arr8);

arr8.pop();  //last elemet deleted
console.log("delel",arr8);
arr8.shift(); //deleted first element
console.log(arr8);
arr8.splice(1,3);  //from first pos, 0- indexed, deleted 3 elements,ignore first element ie 0th element
console.log(arr8);
delete arr8[0]; //makes 0th position element undefined, above erase the position as well, this dont change length
console.log(arr8);


 arr8 = [ 2, 6, 7, 8 ];
 let findValue = arr8.find(function(e) { return e === 6}); //both function finds a value
 let findValue2 = arr8.find(e => e === 10);
 console.log(findValue, findValue2);

  arr8 = [ 2, 6, 7, 8 ];
 let findIndex = arr8.indexOf(6);
 let findIndex2 = arr8.indexOf(10);
 console.log(findIndex, findIndex2); //gives postion of elements, -1 if not found


 arr8 = [ 2, 6, 7,6, 8,6, 6 ];
 let findIndex3 = arr8.indexOf(6, 3); //finds '6' starting from index 3.
 console.log(findIndex3);

 let animals = ["dog", "horse", "cat", "platypus", "dog"];
 let lastDog = animals.lastIndexOf("dog"); //last
 console.log(lastDog);


  let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
 names.sort();
 console.log(names);

  names.reverse();
  console.log(names);


  let ages = [18, 72, 33, 56, 40];
 ages.sort();
 console.log(ages);



let someValues1 = [1, 2, 3];
 let someValues2 = [4, 5, 6];
 let someValues3 = [7, 8, 9];
 let arrOfArrays = [someValues1, someValues2, someValues3];

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let value1 = arrOfArrays[0][1];

/* arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
 [
 ]
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
  }
   
  
   let middleValue = arrOfArraysOfArrays[1][1][1];*/


let arrOfArraysOfArrays = [  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]   ];

  let middleval=arrOfArraysOfArrays[1][1][1]; //0 indexed 
  console.log(middleval);

   /*As we can tell from the following code, arrays are defined by JavaScript as being of 
the object type:*/
 let arr00 = [0, 1, 2];
 console.log(typeof arr00);



//object
  let dog = { dogName: "JavaScript", 
weight: 2.4, 
color: "brown", 
breed: "chihuahua", 
age: 3, 
burglarBiter: true 
};

let dogColor1 = dog["color"];
 let dogColor2 = dog.color;
 console.log(dogColor1,"  ",dogColor2);

  dog["color"] = "blue";
 dog.weight = 2.3;

 console.log(dog);

 dog["age"] = "three";

  let variable = "age";
 console.log(dog[variable]);

 console.log(dog);

variable="breed";
  dog[variable] = "dachshund";
 console.log(dog["breed"]);

 console.log(dog);



 //object in object
  let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
       address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
                },
 yearOfEstablishment: 2021 
  };


 company.address.zipcode = "33117";
 company["address"]["number"] = "100";
console.log(company);


 //arr in object
  company = { companyName: "Healthy Candy",
            activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
          },
 yearOfEstablishment: 2021 
  };

 let activity = company.activities[1];

console.log(activity);


//objects in array  
 let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

   let streetName = addresses[0].street;
   console.log(streetName);


//obj in arr in obj
    company = { companyName: "Healthy Candy",
                    activities: [ "food manufacturing", "improving kids' health","manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
      };


 let streetName23 = company.address[1].street;  
 console.log(streetName23);   


 let rain = true;
 if(rain){
 console.log("** Taking my umbrella when I need to go outside **");
 } else {
 console.log("** I can leave my umbrella at home **");
 }

  let hobby = "dancing";
 if(hobby == "coding"){
  console.log("** I love coding too! **");
 } else {
  console.log("** Can you teach me that? **");
 }



  let age = 10;
 let cost = 0;
 let message55;
 if (age < 3) {
    cost = 0;
    message55 = "Access is free under three.";
 } else if (age >= 3 && age < 12) {
    cost = 5;
    message55 ="With the child discount, the fee is 5 dollars";
 } else if (age >= 12 && age < 65) {
    cost = 10;
    message55 ="A regular ticket costs 10 dollars.";
 } else {
    cost = 7;
    message55 ="A ticket is 7 dollars.";
 }
 console.log(message55);
 console.log("Your Total cost "+cost);   


  age < 18 ? console.log("denied") : console.log("allowed");



  let activity66="lunch"
   switch(activity66) {     //case sensitive
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;  
  case "Drive home":
    console.log("It is 5:00PM");
    break;    
  case "Dinner":
    console.log("It is 6:30PM");
    break;
     default:
    console.log("I cannot determine the current time.");
    break;
 }



 // random number between 0 and 1
 let randomNumber = Math.random(); 
// multiply by 10 to obtain a number between 0 and 10
 randomNumber = randomNumber * 10; 
// removes digits past decimal place to provide a whole number
 RandomNumber = Math.floor(randomNumber);  



 let grade="C";
 switch(grade){
 case "F":
 case "D":
 console.log("You've failed!");
 break;                                           //
 case "C":
 case "B":
 console.log("You've passed!");
 break;
 case "A":
 console.log("Nice!");
 break;
 default:
 console.log("I don't know this grade.");
 }


  let i = 0;
 while (i < 10) {
 console.log(i);
  i++;
 }


 let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
 let notFound = true;
 while (notFound && someArray.length > 0) {
 if (someArray[0] === "Louiza") {
 console.log("Found her!");
    notFound = false;
  } 
else {
    someArray.shift();   //removes first element from array
  }
 }

 console.log(someArray);



 let nr143 = 0;
 let nr24 = 1;
 let temp;
 fibonacciArray = [];
 while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr143);
  temp = nr143 + nr24;
  nr143 = nr24;
  nr24 = temp;  
}

console.log(fibonacciArray);


 let number;
 do {
 number=1;
  //number = prompt("Please enter a number between 0 and 100: ");
 } while (!(number >= 0 && number < 100));

  let arr23 = [];
 for (let i = 0; i < 100; i++) {
  arr23.push(i);
 }


  let arrOfArrays1 = [];
 for (let i = 0; i < 3; i++){
  arrOfArrays1.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays1[i].push(j);
  }
 }

  console.log(arrOfArrays1);

  console.table(arrOfArrays1);  //show in table


  //123
/* let arr = [some array];
 for (initialize variable; variable smaller than arr.length; statement) 
{
 // code to be executed
 }*/

  let names44 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
 for (let i = 0; i < names44.length; i ++){
 console.log(names44[i]);
 }

  let names12 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
 for (let i = 0; i < names12.length; i ++){
  names12[i] = "hello " + names12[i];
 }
 console.log(names12);
  


  let names21 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i < names21.length; i ++){ 
  if(names21[i].startsWith("M")){
    delete names21[i];   //makes empty,dont erase space
    continue;  //skip below line
  }
  names21[i] = "hello " + names21[i]; 
} 
console.log(names21);

/*
 let names33 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
for (let i = 0; i < names33.length; i++){ 
  names33.push("...")
 }*/ //error, as length keep increasing
 


 /* let arr = [some array];
 for (let variableName of arr) {
 // code to be executed
 // value of variableName gets updated every iteration
 // all values of the array will be variableName once
 }*/

/*
  let arr = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
 for (let name of arr){
 console.log(name);
 }   //we dont get struck in infinite loop here, but cannot modify array values
*/

 //for object
  let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
 };
 for (let prop in car){
  console.log(car[prop]);
 }

 //car[year]=1999;

  for (let prop in car){    //only property names, not values
  console.log(prop);
 }


 // Looping over objects by converting to an array

  let car2 = {
 model: "gtr223",
 make: "lambogini",
 year: 2013,
 color: "violet",
 };

  let arrKeys2 = Object.keys(car); //array with prop
 console.log(arrKeys2);     //made obj to array

  for(let key of Object.keys(car2)) {
  console.log(key," ",car2[key]);  
 }


 let arrKeys = Object.keys(car2);
 for(let i = 0; i < arrKeys.length; i++) {
  console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
 }


 let arrEntries = Object.entries(car);
 console.log(arrEntries);     //prop and value in array together as pair

  for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
 }



//array inside square and obj prop in curly
  let cars55 = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  }
 ];



  for (let i = 0; i < 10; i++) {
 console.log(i);
 if (i === 4) {
 break;
  }
 }


 for (let i = 0; i < cars55.length; i++) {
 if (cars55[i].year >= 2020) {
 if (cars55[i].color === "black") {
 console.log("I have found my new car:", cars55[i]);
 break;
    }
  }
 }


 let superLongArray=[100,20,30,45,42,56,66];
  while (true) {
  if (superLongArray[0] != 42 && superLongArray.length > 0) {
    superLongArray.shift();  //remove first element and shift rest to front
  } else {
    console.log("Found 42!");
    break;
  }
 }

 superLongArray=[100,20,30,45,42,56,66];
 let notFound1=true; //previous array was modified
  while (superLongArray.length > 0 && notFound1) {
  if (superLongArray[0] != 42) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    notFound1 = false;
  }
 }

 for (let car of cars55){
  if(car.color !== "black"){  //used !==
   continue;   //ignore rest of code when not black 
  }
  if (car.year >= 2020) {
    console.log("we could get this one:", car);
  }
 }

 /*  //try only odd
  //logs 1 and then went into infinite loop, as i is checked before it is incremented
 i = 1;
 while (i < 50) {
  if (i % 2 === 0){
    continue;
  }
  console.log(i);
  i++;
 }
*/

 i = 1;
 while (i < 50) {
  i++; //i incremented first
  if ((i-1) % 2 === 0){
    continue;
  }
  console.log(i-1);
 }

for (let i = 1; i < 50; i = i + 2) {
 console.log(i);
 }
  


  let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
 ];


 for (let i = 0; i < groups.length; i++) {
  let matches = 0;
 for (let j = 0; j < groups[i].length; j++) {
  if(groups[i][j].startsWith("M")){
      matches++;
    } else {
      continue;
    }
  if (matches === 2){
      console.log("Found a group with two names starting with an M:");
      console.log(groups[i]);
      break;
    }
  }
 }



  for (let group of groups){
  for (let member of group){
    if (member.startsWith("M")){
      console.log("found one starting with M:", member);
       break;
    }
  }
 }


 outer:   //named it outer, so break outer , comes here;; it logs only 1 name as it breaks out of the whole loop
 for (let group of groups) {
 inner:
 for (let member of group) {
 if (member.startsWith("M")) {
 console.log("found one starting with M:", member);
 break outer;
    }
  }
 }
 
//functions

 function sayHello() {
  //let you = prompt("What's your name? "); //take input
  let you="abcd";
  console.log("Hello", you + "!");
 }

  sayHello();

   let varContainingFunction = function() {        //its a function
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
 };
 varContainingFunction();

  function tester(para1, para2){
    return para1 + " " + para2;
 }
 const arg1 = "argument 1";
 const arg2 = "argument 2";
 tester(arg1, arg2);

 /* We have seen various examples of arguments; for example:
 console.log("this is an argument");
 prompt("argument here too");
 let arr = [];
 arr.push("argument");*/




 /* What happens if we call our addTwoNumbers() function without any arguments? 
Take a moment and decide what you think this should do:

 addTwoNumbers();

 Some languages might crash and cry, but not JavaScript. JavaScript just gives the 
variables a default type, which is undefined. And undefined + undefined equals:
 
NaN  //its outputted

Instead, we could tell JavaScript to take different default parameters. And that can 
be done like this:

 function addTwoNumbers(x = 2, y = 3) {
 console.log(x + y);
 }
 

  addTwoNumbers();   //uses default value now
 addTwoNumbers(6, 6);
 addTwoNumbers(10);
 
  addTwoNumbers(1,2,3,4); // It is just adding 1 and 2 and ignoring the last two arguments (3 and 4).



 Their use looks like this:

 (param1, param2) => body of the function;

 Or for no parameters:
 () => body of the function;

 Or for one parameter (no parentheses are needed here):
 param => body of the function;

 Or for a multiline function with two parameters:
 (param1, param2) => {
 // line 1;
 // any number of lines;
 };

*/

  function doingStuff(x) {
 console.log(x);
 }
doingStuff("notgreat");


  let doingArrowStuff = x => console.log(x);
 doingArrowStuff("Great!"); //invoke

  
  let addTwoNumbers = (x, y) => console.log(x + y);
  addTwoNumbers(5, 3);

/* we can use the foreach() method on an array. This method executes a 
certain function for every element in the array. */

 let arr32 = ["squirrel", "alpaca", "buddy"];
 arr32.forEach(e => console.log(e));

 let arr222=[10,20,45,33];
 arr222.forEach(e=> console.log(e+100));

 //spread operator ...
  let sp = ["so", "much", "fun"];
 let message6 = ["JavaScript", "is", ...sp, "and", "very", 
               "powerful"];
 console.log(message6);    
 


  function addTwoNumbers11(x, y) {
  console.log(x + y); 
} 
let arr29 = [5, 9];
 addTwoNumbers11(...arr29);
 //same as   addTwoNumbers(5, 9); this

 function addFourNumbers(x, y, z, a) { 
  console.log(x + y + z + a); 
} 
let arrer = [5, 9];
 let arr2er = [6, 7];
 addFourNumbers(...arrer, ...arr2er);


/* Similar to the spread operator, we have the rest parameter. It has the same symbol as 
the spread operator, but it is used inside the function parameter list.*/


 function someFunction(param1, param2) {
 console.log(param1, param2);
 }
 someFunction("hi", "there!", "How are you?");  //prints only 2 parameters, 'hi there' only


 function someFunction1(param1, ...param2) {
 console.log(param1, param2);
 }
 someFunction1("hi", "there!", "How are you?");//print all

 /* function addTwoNumbers(x, y) {
  return x + y;
 }


  let resultsArr = [];
 for(let i = 0; i < 10; i ++){
  let result = addTwoNumbers(i, 2*i);
  resultsArr.push(result);
 }
 console.log(resultsArr);

*/

//returning with arrows
 let addTwoNumbersff = (x, y) => x + y;

  let addTwoNumbersgg = (x, y) => {
 console.log("Adding...");
 return x + y;
 }


  let result = addTwoNumbersff(12, 15);
 console.log(result);

 /* The difference between let and var is that var is function-scoped, which is the 
concept we described above. let is actually not function-scoped but block-scoped. A 
block is defined by two curly braces { }. The code within those braces is where let is 
still available.

var---function scope
let---block scope
*/

 function doingStuff1() {
  if (true) {
    var x = "local";
  }
  console.log(x);
 }
 doingStuff1();


/*
  function doingStuff2() {
  if (true) {
    let x = "local";
  }
  console.log(x);
 }
 doingStuff2(); //error
*/

/*
 function doingStuff3() { 
if (true) { 
console.log(x);
 let x = "local"; 
  } 
}
 doingStuff3();//error
*/

  function doingStuff4() { 
if (true) { 
console.log(y);
 var y = "local";
  }
 }
 doingStuff4();//undefined

/*
  function doingStuff() {
 if (true) {
      const X = "local";   //const--block scope
  }
  console.log(X); 
 }
 doingStuff();//error
*/


  let globalVar = "Accessible everywhere!";
 console.log("Outside function:", globalVar);
 function creatingNewScope(x) {
  console.log("Access to global vars inside function." , globalVar);
 }
 creatingNewScope("some parameter");
 console.log("Still available:", globalVar);



  function confuseReader() {
  x1 = "Guess my scope...";
 console.log("Inside the function:", x1);
 }
 confuseReader();
 console.log("Outside of function:", x1);

/*. There is no declaration of 
x above the code; this is all the code of the program. JavaScript does not see let or 
var and then decides, "this must be a global variable."*/

// immediately invoked function expression (IIFE) 
/* The immediately invoked function expression (IIFE) is a way of expressing a 
function so that it gets invoked immediately. It is anonymous, it doesn't have a 
name, and it is self-executing.
*/


 (function () {
 console.log("IIFE!");
 })();
/* (); executes the unnamed function—this must be done immediately following a 
function declaration. If your function were to require a parameter, you would pass it 
in within these final brackets.*/

 (()=>{
 console.log("run right away");
 })();


  function getRecursive11(nr) {
 console.log(nr);
 if(nr>-5)
  getRecursive11(--nr);
 }
 getRecursive11(3);



  function getRecursive(nr) {
 console.log(nr);
 if (nr > 0) {
    getRecursive(--nr);
  }
 }
 getRecursive(3);


  function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
      console.log("done with recursion");
  }
  console.log("Ended function:", nr);
 }
 logRecursive(3);


/*
  function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
 }
 doInnerFunctionStuff(3);  //throw error as inner func cant be accessed
*/


// Anonymous functions
/* function doingStuffAnonymously() {
 console.log("Not so secret though.");
 }
 Here is how to turn the previous function into an anonymous function:
 function () {
 console.log("Not so secret though.");
 };

 We will have to store it in a variable in order to call the anonymous function
 */

 let functionVariable = function () {
 console.log("Not so secret though.");
 };
 functionVariable();

  function doFlexibleStuff(executeStuff) {
  executeStuff(); //any function
 console.log("Inside doFlexibleStuffFunction.");
 }
  doFlexibleStuff(functionVariable); //passing function


/* setTimeout() function. It is a very special function that is executing 
a certain function after a specified amount of time that it will wait first. It is also 
seemingly responsible for quite a few terribly performing web pages, but that is 
definitely not the fault of this poor misunderstood and misused function.*/

 let youGotThis = function () {
 console.log("You're doing really well, keep coding!");
 };
 setTimeout(youGotThis, 60000); //waiting 1000ms=1sec
//setInterval(youGotThis, 1000); 


/*you can use the setInterval() function instead. 
It works very similarly, but instead of executing the specified function once, it will 
keep on executing it with the specified interval:*/

//object
/* let dog = { dogName: "JavaScript", 
weight: 2.4, 
color: "brown", 
breed: "chihuahua"
          };*/


class ClassName {
 constructor(prop1, prop2) {
 this.prop1 = prop1;
     this.prop2 = prop2;
  }
 }
 
let obj = new ClassName("arg1", "arg2");


 function Dog(dogName, weight, color, breed) {  
  this.dogName = dogName; 
  this.weight = weight; 
  this.color = color; 
  this.breed = breed; 
}  
let dog1 = new Dog("Jacky", 30, "brown", "labrador");

 console.log(dog1.dogName, "is a", dog1.breed, "and weighs", dog1.weight, 
"kg.");


 class Dog12 {            //class
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
 }
 let dog45 = new Dog12("JavaScript", 2.4, "brown", "chihuahua");

  console.log(dog45.dogName, "is a", dog45.breed, "and weighs", dog45.weight, 
"kg.");





 class Person {
 constructor(firstname, lastname) {
 this.firstname = firstname;
 this.lastname = lastname;
  }
 }

  let p = new Person("Maaike", "van Putten"); //new object created
   console.log("Hi", p.firstname);

    let p1 = new Person("Maaike"); //lastname is undefined
     console.log("Hi", p1.firstname, p1.lastname);
/*
 constructor(firstname1, lastname = "Doe"){
 this.firstname1 = firstname1;
 this.lastname = lastname;
  }*/

  /* Functions on a 
class are called methods. When defining these methods, we don't use the function 
keyword. We start directly with the name*/




 class Person1 {
 constructor(firstname, lastname) {
 this.firstname = firstname;
 this.lastname = lastname;
  }
 greet() {
 console.log("Hi there! I'm", this.firstname);
  }
 }

  p = new Person1("Maaike", "van Putten");
 p.greet();




  class Person3 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
 }

 p = new Person3("Maaike", "van Putten");
  let compliment = p.compliment("Harry", "hat");
 console.log(compliment);


/* This is how to add properties that aren't accessible from outside. We prefix them 
with a # symbol:*/
 class Personer {
  #firstname;    //hidden
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
 }

   p = new Personer("Maria", "Saga");
 console.log(p.firstname);

p.firstname="addd";//creates a new property which is public
console.log(p.firstname);
console.log(p);

/* Getters and setters are special properties that we can use to get data from a class and 
to set data fields on the class. Getters and setters are computed properties. So, they 
are more like properties than they are like functions. We call them accessors. They do 
look a bit like functions, because they have () behind them, but they are not!
*/

 class Personzz {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    console.log("realget");
    return this.#firstname;
  }
  set firstname(firstname) {
    console.log("realset");
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
 }

 p = new Personzz("Maria", "Saga");
 console.log(p.firstname);//as get used so we access real firstname
 p.firstname = "Adnane";//due to set we edit real firstname
 console.log(p.firstname);
 console.log(p);


 class Vehicleff {
 constructor(color, currentSpeed, maxSpeed) {
     this.color = color;
     this.currentSpeed = currentSpeed;
     this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
 }


 class Motorcycle extends Vehicleff {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheel!");
   }
 }
/*The super word in the constructor is calling the constructor from the parent, the 
Vehicle constructor in this case. This makes sure that the fields from the parent 
are set as well and that the methods are available without having to do anything 
else: they are automatically inherited. Calling super() is not optional, you must do 
it when you are in a class that is inheriting from another class, else you will get a 
ReferenceError.*/

 let motor = new Motorcycle("Black", 0, 250, "gasoline");
 console.log(motor.color);
 motor.accelerate(50);
 motor.move();

/* There is a prototype property available on all classes, and it is always named 
"prototype." We can access it like this:
 ClassName.prototype*/

  class Personoo {
 constructor(firstname, lastname) {
 this.firstname = firstname;
 this.lastname = lastname;
  }
 
 greet() {
 console.log("Hi there!");
 }
}

 Personoo.prototype.introduce = function () {
 console.log("Hi, I'm", this.firstname);//gap as comma seperateds arguments
console.log("Hi, I'm " + this.firstname);
console.log(`Hi, I'm ${this.firstname}`);//recommanded
console.log("Hi,", " ", "Maria");

 };

  Personoo.prototype.favoriteColor = "green";

   p = new Personoo("Maria", "Saga");
 console.log(p.favoriteColor);
 p.introduce();

 /* prototype is a property holding all the properties and methods of an object. So, 
adding a function to prototype is adding a function to the class. You can use 
prototype to add properties or methods to an object, like we did in the above 
example in our code with the introduce function. */



/* Methods can often be chained as well; this is only true for methods returning a 
result. The next method will then be performed on the result. So for example:*/


 let s = "Hello";
 console.log(
  s.concat(" there!")
  .toUpperCase()
  .replace("THERE", "you")  //any case of there replaced
  .concat(" You're amazing!")
 );


isNaN("123");  // false  (string gets converted to number 123)
isNaN("abc");  // true   (can't convert to number, becomes NaN)
Number.isNaN("abc");  // false  ("abc" is not NaN — it's a string)
Number.isNaN(NaN);    // true   (only true if the value is exactly NaN)

//number is a object containing helper functions


/*. A URI (uniform resource identifier) is an identifier of 
a certain resource. URL (uniform resource locator) is a subcategory of URI that is not 
only an identifier, but also holds the information on how to access it (location).*/


 let uri = "https://www.example.com/submit?name=maaike van putten";
 let encoded_uri = encodeURI(uri);
 console.log("Encoded:", encoded_uri);
 let decoded_uri = decodeURI(encoded_uri);
 console.log("Decoded:", decoded_uri);

 /* This is great for fixing broken URIs, but it's actually a bit useless whenever you need 
to encode strings that contain any of these characters: / , ? : @ & = + $ #. These can 
be used in URIs as part of the URI and are therefore skipped. This is where the next 
two built-in methods come in handy.*/


/*Weird value, we can agree on that, but it will demonstrate our problem. Using 
encodeURI on this will leave us with: 
https://www.example.com/submit?name=this&that=some%20thing&code=love
 There are actually 3 variables in here according to URI standards:
 • name (value is this)
 • that (value is some thing)
 • code (value is love)
 While we intended to send in one variable, name, with the value this&that=some 
thing&code=love.*/

 let uri1 = "https://www.example.com/submit?name=maaike van putten";
 let encoded_uri1 = encodeURIComponent(uri1);
 console.log("Encoded:", encoded_uri1);
 let decoded_uri1 = decodeURIComponent(encoded_uri1);
 console.log("Decoded:", decoded_uri1);

  let str_int = "6";
 let int_int = parseInt(str_int);
 console.log("Type of ", int_int, "is", typeof int_int);

  let str_float = "7.6";
 let int_float = parseInt(str_float);
 console.log("Type of", int_float, "is", typeof int_float);
 let str_binary = "0b101";
 let int_binary = parseInt(str_binary);    //stops parsing as soon as it sees dot and 'b'
 console.log("Type of", int_binary, "is", typeof int_binary);

 let str_nan = "hello!";
 let int_nan = parseInt(str_nan);
 console.log("Type of", int_nan, "is", typeof int_nan);

 str_float = "7.6";
 let float_float = parseFloat(str_float);
 console.log("Type of", float_float, "is", typeof float_float);


 let str_version_nr = "2.3.4";
 let float_version_nr = parseFloat(str_version_nr);
 console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// document.body.style.backgroundColor = "pink";



  arr = ["grapefruit", 4, "hello", 5.6, true];

 function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
 }

 arr.forEach(printStuff); //this executes them, didnt need to give index


 /* We can use the built-in filter() method on an array to alter which values are in the 
array. The filter method takes a function as an argument, and this function should 
return a Boolean. If the Boolean has the value true, the element will end up in the 
filtered array. If the Boolean has the value false, the element will be left out. */
//202

 arr = ["squirrel", 5, "Tjed", new Date(), true];
 function checkString(element, index) {
  return typeof element === "string";
 }
 let filterArr = arr.filter(checkString);
 console.log(filterArr);

console.log(arr.every(checkString)); // This will log false, since not all elements are of type string in the array.



 arr = ["grapefruit", 4, "hello", 5.6, true];
 arr.copyWithin(0, 3, 4); 
 console.log(arr);
/*arr.copyWithin(target, start, end);
target: Index to copy data to.

start: Index to start copying from (inclusive).

end: Index to stop copying at (exclusive).*/
 arr = ["grapefruit", 4, "hello", 5.6, true];
 arr.copyWithin(0, 3, 5);
console.log(arr);

arr = ["grapefruit", 4, "hello", 5.6, true, false];
 arr.copyWithin(0, 3); //no end mentioned, takes up to end of sequence by default
 console.log(arr);


  arr = [1, 2, 3, 4];
 let mapped_arr = arr.map(x => x + 1);
 console.log(mapped_arr);


 //indexOf
  let bb = ["so", "bye", "bye", "love"];
 console.log(bb.lastIndexOf("bye"));

  bb = ["so", "bye", "bye", "love"];
 console.log(bb.lastIndexOf("hi")); //-1

  let s1 = "Hello ";
 let s2 = "JavaScript";
  result = s1.concat(s2);
 console.log(result);

  result = "Hello JavaScript";
 let arr_result = result.split(" "); //makes array, items split when in string " " gap is seen.
 console.log(arr_result);

 ///207

 let favoriteFruits1 = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits1.split(",");
 console.log(arr_fruits);

//array to string
 let letters = ["a", "b", "c"];
 let x = letters.join(); //comma by default
 console.log(x);

   letters = ["a", "b", "c"];
  x = letters.join('-');
 console.log(x);



  let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
            
 let index_re = poem.indexOf("re");
 console.log(index_re); //first occurence is at 'are'

  let indexNotFound = poem.indexOf("python");
 console.log(indexNotFound); //-1


  let searchStr = "When I see my fellow, I say hello";
 let pos = searchStr.search("lo"); //first index
 console.log(pos); //-1 if not found

/* search() will accept a regex format as input, whereas indexOf() just takes a string. 
indexOf() is faster than the search() method, so if you just need to look for a string, 
use indexOf(). If you need to look for a string pattern, you'll have to use the search() 
method*/

str = "abc123";
console.log(str.search(/\d+/));  // 3 (matches "123")
console.log(str.search(/x/));    // -1
//regex supported


 let lastIndex_re = poem.lastIndexOf("re");
 console.log(lastIndex_re);

  let pos1 = poem.charAt(10);
 console.log(pos1);

  let pos2 = poem.charAt(1000);
 console.log(pos2); //empty line

 str = "Create a substring";
 let substr1 = str.slice(5);
 let substr2 = str.slice(0,3); ///3 excluded
 console.log("1:", substr1);
 console.log("2:", substr2);

  let hi = "Hi buddy";
 let new_hi = hi.replace("buddy", "Pascal");
 console.log(new_hi);

  let new_hi2 = hi.replace("not there", "never there");
 console.log(new_hi2);//original returned, as not found

  let s3 = "hello hello";
 let new_s3 = s3.replace("hello", "oh");  //only first hello replaced
 console.log(new_s3);

  s3 = "hello hello";
  new_s3 = s3.replaceAll("hello", "oh");  //replaces all
 console.log(new_s3);

let low_bye = "bye!";
 let up_bye = low_bye.toUpperCase();
 console.log(up_bye);

  let caps = "HI HOW ARE YOU?";
 let fixed_caps = caps.toLowerCase();
 console.log(fixed_caps);

 caps= "HI HOW ARE YOU?";
 fixed_caps = caps.toLowerCase();
 let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));

 console.log(first_capital);

 /*let caps = "HI HOW ARE YOU?";

// Step 1: Make everything lowercase first
let fixed_caps = caps.toLowerCase();

// Step 2: Split into words
let words = fixed_caps.split(" ");

// Step 3: Manually fix words
words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);  // Capitalize first word
words[1] = "HOW";  // Restore HOW to uppercase

// Step 4: Join back into a sentence
let result = words.join(" ");

console.log(result);  // Output: "Hi HOW are you?"*/


 let encouragement = "You are doing great, keep up the good work!";
 let bool_start = encouragement.startsWith("You");
 console.log(bool_start);

  let bool_start2 = encouragement.startsWith("you");
 console.log(bool_start2); //case sensitive

  let bool_start3 = encouragement.toLowerCase().startsWith("you");
 console.log(bool_start3);

  let bool_end = encouragement.endsWith("Something else");
 console.log(bool_end);

 x = 34;
 console.log(isNaN(x)); //false as its number
 console.log(!isNaN(x));
 str = "hi";
 console.log(isNaN(str));

 str1 = "5";
 console.log(isNaN(str1)); //still false, as its a number, crazy lol


 /* isFinite(). It returns false for NaN, Infinity, and 
undefined, and true for all other values:*/

  x = 3;
  str = "finite";
 console.log(isFinite(x)); //only number finite
 console.log(isFinite(str)); //string is not finite, NaN
 console.log(isFinite(Infinity));
 console.log(isFinite(10 / 0));


 x = 3;
 str = "integer";
 console.log(Number.isInteger(x));
 console.log(Number.isInteger(str));
 console.log(Number.isInteger(Infinity));
 console.log(Number.isInteger(2.4));


 x = 1.23456;
 let newX = x.toFixed(2); 
 console.log(x, newX);

   x = 1.23456;
  newX = x.toFixed(3);   
console.log(x, newX);  //round off, 3 is only decimal digits

 x = 1.23456;
 newX = x.toPrecision(2);
 console.log(newX);

x = 1.23456;
 newX = x.toPrecision(4); 
console.log(newX);  //rounds off too, 4 includes decimal part as well as int part


 let highest = Math.max(2, 56, 12, 1, 233, 4);
 console.log(highest);

  let lowest = Math.min(2, 56, 12, 1, 233, 4);
 console.log(lowest);

  let highestOfWords = Math.max("hi", 3, "bye");
 console.log(highestOfWords);//not ignoring text,it cant decide if the text is higher or lower

   result = Math.sqrt(64);
 console.log(result);

 result2 = Math.pow(5, 3);
 console.log(result2);


 x = 6.78;
 let y = 5.34;
 console.log("X:", x, "becomes", Math.round(x));
 console.log("Y:", y, "becomes", Math.round(y));

  console.log("X:", x, "becomes", Math.ceil(x));
 console.log("Y:", y, "becomes", Math.ceil(y));

  let negativeX = -x;
 let negativeY = -y;
 console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
 console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

  console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
 console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

  console.log("X:", x, "becomes", Math.trunc(x));
 console.log("Y:", y, "becomes", Math.trunc(y));

   x = 2;
 let exp = Math.exp(x);
 console.log("Exp:", exp);
 let log = Math.log(exp); //log(e^2)=2
 console.log("Log:", log);



//date


 let currentDateTime = new Date(); //constructor
 console.log(currentDateTime);

  let now2 = Date.now(); 
 console.log(now2);
 /* This will log the current time, represented in seconds since January 1st 1970. This is 
an arbitrary date representing the Unix epoch*/

  let milliDate = new Date(1000);
 console.log(milliDate);  //Creates a date from milliseconds since 1970-01-01T00:00:00.000Z (Unix Epoch time)
/*We can add 1,000 milliseconds to the Unix epoch time*/

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
 console.log(stringDate);

/* you can also specify a certain date using the constructor:*/
 let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
 console.log(specificDate);

 /* 2022-02-10T12:10:15.100Z means
 Part	------Meaning
2022-02-10	----📅 Date: 10th February 2022
T------	⏱ Separator between date and time
12:10:15.100------	🕐 Time: 12 hours, 10 minutes, 15.100 seconds
Z	------🌍 Zulu Time (UTC) — means it's in Coordinated Universal Time (UTC+0)*/


 let d = new Date();
 console.log("Day of week:", d.getDay());
 console.log("Day of month:", d.getDate());
 console.log("Month:", d.getMonth());
 console.log("Year:", d.getFullYear());
 console.log("Seconds:", d.getSeconds());
 console.log("Milliseconds:", d.getMilliseconds());
 console.log("Time:", d.getTime());

  d.setFullYear(2010);
 console.log(d);

 d.setMonth(9);
 console.log(d);


 d.setDate(10);
 console.log(d);

  d.setHours(10); //more than 24? rolls over to next date
 console.log(d);

 d.setTime(1622889770682);
 console.log(d);

 let date = new Date(1609459200000);
console.log(date.toString());//Convert Epoch to Date,,Output: "Fri Jan 01 2021 05:30:00 GMT+0530 (India Standard Time)
let now = new Date();
console.log(now.getTime());// e.g., 1720455300000


  let d1 = Date.parse("June 5, 2021");
 console.log(d1);
let d2 = Date.parse("6/5/2021");
 console.log(d2);
/*it ends with many zeros, because no time or seconds are specified in 
our string.  input for the parse is ISO formats of dates.*/


// date to a string
console.log(d.toDateString());

 console.log(d.toLocaleDateString());


 //console.dir(window)
 /* The console.dir() method shows a list of all the properties of the specified object.*/
 //238
 // window.history.length;  console.dir(window.history)  console.dir(history)
/*If you visit other pages or click links before running history.length, it might become 2, 3, etc.*/
// window.history.go(-1); //go back to prev page
// console.dir(window.navigator);  console.dir(navigator);

//console.dir(window.location) or console.dir(location)


/*In JavaScript:

== is the loose equality operator (allows type coercion).

=== is the strict equality operator (no type coercion; compares both value and type).

5 === 5         // true (same value, same type)
5 === '5'       // false (different types: number vs string)

5 == '5'        // true (string '5' is converted to number 5)
0 == false      // true (both are falsy values)
null == undefined // true (special case)

*/

//243
// console.dir(document);

/* The document.querySelector() method will return the first element within the 
document that matches the specified selectors. If no matching page elements are 
found, the result null is returned.  To return multiple matching elements, you can 
use the method document.querySelectorAll().*/

 const ele1 = document.querySelector("h2"); //null if not found
 console.dir(ele1);

  const eles = document.querySelectorAll(".testing");  //we selected a instances of class testing
 console.log(eles); //nodelist if dom not ready or not present. my script was before so timing issue







 document.addEventListener("DOMContentLoaded", function () {  //selects when all dom loaded
  
  
  
  const ele1 = document.querySelector("h2");
  console.dir(ele1);

  const eles = document.querySelectorAll(".testing");
  console.log(eles);

 // type in console //console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);
/* 
const treasure = document.getElementById("treasure");
console.dir(treasure);
*/
const tree2 = document.getElementById("tree2");  //using children maybe be problem as whitespace also counts
const shrubbery = tree2.children[0]; // shrubbery
const treasure = shrubbery.children[0]; // treasure
console.dir(treasure);


/*
const treasure = document.querySelector("#forest #tree2 #shrubbery #treasure");
console.dir(treasure);
*/


//document.getElementById("tree2").parentElement;

//document.querySelector("#tree2").parentElement; //tree2's parent is #forest > #tree2 → parent = #forest



const parent = document.getElementById("tree2").parentElement;   //move up node
console.log(parent.id); // should print "forest;; if u use 'parent', full DOM element are printed



const tree22 = document.querySelector("#forest #tree2");
console.log(tree22);

const tree23 = document.getElementById("tree2");
const tree1 = tree23.previousElementSibling;  //.previousElementSibling walks one element left in the DOM
console.log(tree1); // <div id="tree1">...</div>

const tree14 = document.getElementById("tree1");
const tree24 = tree14.nextElementSibling; 
console.log(tree24);



/*In console----or console.log(dont work)

document.body.children.greeting;
document.body.children.greeting.innerText = "Bye!"; //innerText property focuses on the text between the opening and closing of the 
element,
document.body.children.greeting.innerText = "<p>Bye!</p>";


 document.body.children.greeting.innerHTML = "<b>Bye!</b>"; //html code works



 document.getElementById("two"); //more than one?then first one is returned

document.getElementsByTagName("div");

 document.getElementsByTagName("div").item(1); ///access them by index, start is 0.

document.getElementsByTagName("div").namedItem("one");

document.getElementsByTagName("h1");

document.getElementsByClassName("example");

 document.querySelectorAll("p");

  document.querySelectorAll("p.example"); //selects all p elements with example as class.

   document.querySelector("div");

 document.querySelector(".something"); 1st elemnt of class something
 
 document.querySelectorAll("div");






*/

 

});


/*
type in console---

console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].
 childNodes[1]);

  console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].
 children.treasure);

  document.body.children.forest.children.tree2.parentElement;

 document.body.children.forest.children.tree2;

document.body.children.forest.children.tree2.previousElementSibling;

 document.body.children.forest.children.tree1.nextElementSibling;
 */




 //console.dir(document.body);




//to html
 function stop(){
        alert("Ouch! Stop it!");
  }


document.addEventListener("DOMContentLoaded",function(){


    document.getElementById("one2").onclick = function () {       
      alert("Auch! Stop!"); 
    } 
    //263

    


 let el = document.createElement("p");  
 //el.innerText = Math.floor(Math.random() * 100);
 el.innerText="i added this from js AHAHAHAH";
 document.body.appendChild(el);



    
})


 function reveal(el){     //normal function
        console.log(el);
  }


   function reveal2(el){
 console.log(el.parentElement); //body is parent of button, so output is body
 }


function toggleDisplay(){
 let p = document.getElementById("magic");
        if(p.style.display === "none") {
          p.style.display = "block";
        } 
        else {
          p.style.display = "none";
        }
 }




 function rainbowify(){      //function, creates each "block" of colour, on below another,and gives colour according to their names.
 //let divs = document.getElementById("hello");
 let container=document.getElementById("hello");
 let divs=container.getElementsByTagName("div");
 for(let i = 0; i < divs.length; i++) {
          divs[i].style.backgroundColor = divs[i].id;  
    }
  }

//js inside script and css inside style tags in html

 function disappear(){ 
 document.getElementById("shape").classList.add("hide"); //This adds a CSS class named hide to the HTML element with id="shape".
  }


   function change(){
        document.getElementById("shape2").classList.remove("blue");
      }


 function changeVisibility(){
        document.getElementById("shape3").classList.toggle("hide");
      }





   function changeAttr() {
      let el = document.getElementById("shape4");

      // Change style
      el.setAttribute("style", "background-color: red; border: 2px solid black; height: 100px; width: 100px;"); 

      // Add circle class (to make it round)
      el.setAttribute("class", "circle");

      // Change the ID (optional)
      el.setAttribute("id", "new");

    }

    /*they overwrite styles and thus removed previous height and width,instead can use this,
    function changeAttr() {
  let el = document.getElementById("shape4");
  el.style.backgroundColor = "red";
  el.style.border = "2px solid black";
  el.classList.add("circle");
  el.id = "new";
}
  changes only whats needed
*/
//276
/*There is one special condition, though; 
one element can only have one event handler as an HTML attribute. So, if it has an 
onclick handler, it cannot have an onmouseover handler as well.*/

// document.getElementById("square").addEventListener("click",changeColor); 
//removed 'on' prefix from onclick

/* window.onload = function() {
  // whatever needs to happen after loading
  // for example adding event listeners to elements
 }*/

document.addEventListener("DOMContentLoaded",function(){
    
        document.getElementById("squarer").addEventListener("click",changeColor); //event,function
  
});


 function changeColor(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; //use ``
  }


  /*. For example, focus, blur, focusin, focusout, mouseout, 
mouseover, keydown, keypress, and keyup*/

 function addRandomNumber(){
        let el = document.createElement("p");
        el.innerText = Math.floor(Math.random() * 100);
        document.body.appendChild(el);
      }


 //document.getElementById("unique").onclick = function() { magic(); };
// document.getElementById("unique").addEventListener("click", magic);
//same thing, we can send paramters in magic function

// document.getElementById("unique").addEventListener("click", function() { magic(arg1, arg2) });



/* window.onload = function() {
 // whatever needs to happen after the page loads goes here
 }*/

//domcontentloaded
// <body onload="unique()"></body> ---html



/* ondblclick: when the mouse is double-clicked
 • onmousedown: when the mouse clicks on top of an element without the click 
being released
 • onmouseup: when the mouse click on top of an element is released
 • onmouseenter: when the mouse moves onto an element
 • onmouseleave: when the mouse leaves an element and all of its children
 • onmousemove: when the mouse moves over an element
 • onmouseout: when the mouse leaves an individual element 
• onmouseover: when the mouse hovers over an element*/


 function changeColor2() {
 document.getElementById("divvy").style.backgroundColor = 
"blue";
  }
//dont give same name to diff functions


/*DOMContentLoaded fires as soon as the HTML is fully parsed, without waiting for images or CSS.

window.onload waits for everything (images, stylesheets, etc.) — which can delay your script.*/





document.addEventListener("DOMContentLoaded",function(){
 
        console.log("hi");
        document.getElementById("divvy2").addEventListener("mousedown",function() { changeColor3(this, "green"); }); 

        document.getElementById("divvy2").addEventListener("mouseup",function() { changeColor3(this, "yellow"); }); 

        document.getElementById("divvy2").addEventListener("dblclick",function() { changeColor3(this, "black"); }); 

        document.getElementById("divvy2").addEventListener("mouseout",function() { changeColor3(this, "blue"); }); 

      
  });
     console.log("hi2"); 
      function changeColor3(el, color) {
        el.style.backgroundColor = color;
      }



// console.dir(event);





/*You wrapped window.onload = function() inside a DOMContentLoaded listener, which is not how window.onload should be used.

That overrides the real window.onload assignment and never runs, so your divvy2 event listeners are never added.

*/

/* Two other events that are often combined with input boxes are onchange and onblur. 
onchange gets triggered when an element changes, for example, when the value of 
an input box changes. onblur gets triggered when an object goes out of focus; for 
example, when you have the cursor in one input box and the cursor goes to another 
input box, the onblur event of the first input box will get triggered.*/
/* onkeypress gets triggered, 
well, you may have guessed this, whenever a key gets pressed. Pressing means here 
when the button is pressed and released. If you want an event to happen as soon as 
the button is pressed (so before releasing), you can use the onkeydown event. If you 
want the event to happen on release, you can use the onkeyup event.*/



// event.key;

/* One other thing might have caught your eye: onpaste="return false". 
This is to deal with smart people who copy and paste numbers to a non-numeric 
field or other characters to a numeric field and still manage to get illegal characters 
in there.  309*/



/* <form onsubmit="doSomething()">
 <input type="submit" value="send">
<form action="anotherpage.html" method="get" onsubmit="doStuff()">

this just means that values get sent via the URL. 
URLs look like this when you use get:
 www.example.com/anotherpage.html?name=edward
 After the question mark, the variables that are sent along are shown in key-value 
pairs. This is the form that created the URL when edward was inserted for name.

*/

/* anotherpage.html can use the variables from the URL. This can be done in the 
JavaScript of anotherpage.html doing something like this:
 <!doctype html>
 <html>
  <body>
    <script>
      let q = window.location.search; 
      let params = new URLSearchParams(q); 
      let name = params.get("name");
      console.log(name);
    </script>
  </body>
 </html>*/



 /*method="GET": Sends form data in the URL (like this: receiver.html?name=John).
 name="name": The key used in the URL. If user types "John", URL becomes receiver.html?name=John

 window.location.search
→ gets the query string part of the URL
→ For example: ?name=John

new URLSearchParams(q)
→ Turns ?name=John into a searchable object.

params.get("name")
→ Extracts the value of "name" → here, it's "John".

console.log(name)
→ Shows "John" in the browser console.
 */
//327




document.addEventListener("DOMContentLoaded",function(){

document.getElementById("divvy2").addEventListener("click", function(event) {
  console.dir(event);
});  //shows event on clicking 

})


console.log("THIS IS THE END PART YOOOOOOOOOOOOOOOOOOOO");



 let text = "I love Javascript!"; //case sensitive, j is capital so null
 console.log(text.match(/javascript/));
console.log(text.match(/javascript/i)); //place "i" to make it case sensitive




let sentence = "My name is Alice Smith";

let match = sentence.match(/My name is (\w+) (\w+)/);
//                                     ↑       ↑     ↑
//                                 group 1   space  group 2

console.log(match);
console.log(match[1]); // "Alice"
console.log(match[2]); // "Smith"



text = "My name is Alice Smith";
match = text.match(/My name is (?<first>\w+) (?<last>\w+)/);

console.log(match);
console.log(match.groups.first); // "Alice"
console.log(match.groups.last);  // "Smith"
/*\w+ = one or more word characters (a–z, A–Z, 0–9, _)

The parentheses ( ) create capturing groups

So:

Group 1: "Alice"

Group 2: "Smith"*/



 text = "I love JavaScript!";
 console.log(text.match(/javascript|nodejs|react/i));

text = "I love React and JavaScript!";
 console.log(text.match(/javascript|nodejs|react/i));

 /* the expression matches either javascript, nodejs, or react.*/

/* If we wanted to find all matches, we could specify the global modifier, g*/

  text = "I love React and JavaScript!";
 console.log(text.match(/javascript|nodejs|react/gi));//case insensitive and global


/* search for a string of only one 
character equal to a, b, or c. */
 text = "d";
 console.log(text.match(/[abc]/)); //null as text has no a or b or c
  console.log(text.match(/[abcd]/));
console.log(text.match(/[a-d]/));//in short,range of character
 
text = "t";
 console.log(text.match(/[a-zA-Z]/));//any letter,uppercase or lowercase
 console.log(text.match(/[a-z]/i));//same as up
  console.log(text.match(/[a-zA-Z0-9]/));//numbers as well

 text = "Just some text.";
 console.log(text.match(/./g));
 /* Since it has the global modifier, it is going to match any character*/
 text = "Just some text.";
 console.log(text.match(/\./g));//dot only 

  text = "I'm 29 years old.";
 console.log(text.match(/\d/g)); //matches digits 

  text = "Coding is a lot of fun!";
 console.log(text.match(/\s/g));//matches whitespace


 text = "In the end or at the beginning?";
 console.log(text.match(/\bin/gi));// \b, which matches text only when it's at the beginning of a word not a sentence. 
let text1 = "the end or in the beginning?";
 console.log(text1.match(/\bin/gi));//here 'in' is a seperate word
let text2 = "the end or NOWin the beginning?";
 console.log(text2.match(/\bin/gi)); //null



  text = "I love JavaScript!";
 console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));//we can group using()

 text = "I love JavaScript!";
 console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));//any first four combination of a WORD
console.log(text);
console.log(text.match(/[a-zA-Z0-9]{4}/g));//shorter, square bracket btw
/*here only 3 words output as it ignores overlapping characters*/


 text = "You are doing great! nng gg nneg nn";
 console.log(text.match(/n?g/gi));/* This looks for a g character that may or not may be preceded by an n*/
//optional quatifier, zero or 1

 text = "123123123";
 console.log(text.match(/(123)+/));//cant be empty as its not closure


 text="123123123a";
console.log(text.match(/(123)*a/)); //


text = "abcabcabc";
 console.log(text.match(/(abc){1,2}/)); // {min, max} max--abcabc


 text = "I love JavaScript!";
 console.log(text.match(/(?<language>javascript)/i));//to specify groups, we have to name them


 text = "That's not the case.";
 console.log(text.search(/Case/i));//15 , starting index of the match



 text = "Coding is fun. Coding opens up a lot of opportunities.";
 console.log(text.replace("Coding", "JavaScript"));// only first coding is replaced


 text = "Coding is fun. Coding opens up a lot of opportunities.";
 console.log(text.replace(/Coding/g, "JavaScript")); //g used, all coding is replaced



 let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

 let validEmail = "maaike_1234@email.com";
 let invalidEmail = "maaike@mail@.com";
 console.log(validEmail.match(emailPattern));
 console.log(invalidEmail.match(emailPattern));//null




  function test(a, b, c) {
  console.log("first:", a, arguments[0]); //arguments[i] can also be used
  console.log("second:", b, arguments[1]);
  console.log("third:", c, arguments[2]);
 }
 test("fun", "js", "secrets");


  function test1(a, b, c) {
  a = "nice";
  arguments[1] = "JavaScript"; //changes b
  console.log("first:", a, arguments[0]);
  console.log("second:", b, arguments[1]);
  console.log("third:", c, arguments[2]);
 }
 test1("fun", "js", "secrets");
//modern way is to use param, rest parameter



 x11 = 5;
 console.log(x11);
 var x11;// very hard to read, unpredictable



  function sayHi() {
  greeting = "Hello!";//not declared,JavaScript did it for us by adding a greeting variable to the top level 
 console.log(greeting);
 }
 sayHi();



//use strict at top of file for whole file
  function sayHii() {
    "use strict";//recommanded to use, not accidentally creating global variables
  greeting1e = "Hello!";//not declared,JavaScript did it for us by adding a greeting variable to the top level 
 //console.log(greeting1e);//error
 }
 //sayHii();



/*You can use the menu options to move to the next breakpoint, stop 
debugging, or restart the breakpoint sequence. Press the play icon to move to 
the next breakpoint. It will update to have a value of 5, as specified by line 1, 
and pause at the first breakpoint. Note that the highlighted line has not been 
run yet:          Press the play icon once more, and the script will run until it hits the next 
breakpoint, at which point the value of the variable will update as a result of 
the code on line 2:          Once the last breakpoint is reached you will only see options to restart or 
stop the debugger. If you press stop, it will end the debugging process:*/


/*

 try {
  somethingVeryDangerous();
 } catch (e) {
 if (e instanceof TypeError) {
 // deal with TypeError exceptions
  } else if (e instanceof RangeError) {
  } else if (e instanceof EvalError) {
  } else {
 //deal with all other exceptions
 throw e; //rethrow
  }
 }


*/


/*
try {
  trySomething();
 } catch (e) {
 console.log("Oh oh");
 } finally {
 console.log("Error or no error, I will be logged!");



 function somethingVeryDangerous() {
 throw RangeError();
 }
 }*/




function testError(type) {
  try {
    if (type === "type") {
      throw new TypeError("This is a TypeError");
    } else if (type === "range") {
      throw new RangeError("This is a RangeError");
    } else if (type === "custom") {
      throw new Error("This is a generic custom error");
    } else {
      console.log("No error thrown");
    }
  } 
  catch (err) {
    if (err instanceof TypeError) {
      console.log("Caught a TypeError: " + err.message);
    } else if (err instanceof RangeError) {
      console.log("Caught a RangeError: " + err.message);
    } else {
      console.log("Caught some other error: " + err.message);
    }
  } finally {
    console.log("The finally block always runs!");
  }
}

// 🧪 Test different error types
testError("type");
testError("range");
testError("custom");
testError("none"); // no error
/*creating an error object of type TypeError, and passing a message — the string "This is a TypeError"*/

//352
/*
 document.cookie = "name=Maaike;favoriteColor=black";

  let cookie = decodeURIComponent(document.cookie);
 let cookieList = cookie.split(";");//make array of info
 for (let i = 0; i < cookieList.length; i++) {
 let c = cookieList[i];
 if (c.charAt(0) == " ") {
    c = c.trim();  //(remove the whitespace in front and at the back)

  }
 if (c.startsWith("name")) {
    alert(c.substring(5, c.length)); 
  }
 }
*//*An HTTP request is a message sent by your browser (or client) to a server to ask for some data — like a webpage, image, or result from a search.*/
/*
retrieve a key by index:
 
window.localStorage.key(0);
 
In this case, the key is name. In order to get the associated value, we can do this:
 
 window.localStorage.getItem(window.localStorage.key(0));

 We can also remove key-value pairs like this:
 
 window.localStorage.removeItem("name");
 
 And we can remove all the key-value pairs from the local storage in one call:
 
 window.localStorage.clear();
*/

//358
/* 
example of json///key always in quotes and values in quotes only when strings
{
 "name" : "Malika",
 "age" : 50,
 "profession" : "programmer",
 "languages" : ["JavaScript", "C#", "Python"], //array , square brackets
 "address" : {                                //object in object
        "street" : "Some street",
        "number" : 123,
        "zipcode" : "3850AA",
        "city" : "Utrecht",
        "country" : "The Netherlands"
  }   
}

we can also make list of objects


 {
    "companies": [
        {
            "name": "JavaScript Code Dojo",
            "addresses": [
                {
                    "street": "123 Main street",
                    "zipcode": 12345,
                    "city" : "Scott"
                },
                {
                    "street": "123 Side street",
                    "zipcode": 35401,
                    "city" : "Tuscaloosa"
                }
            ]
        },
        {
            "name": "Python Code Dojo",
            "addresses": [
                {
                    "street": "123 Party street",
                    "zipcode": 68863,
                    "city" : "Nebraska"
                },
                {
                    "street": "123 Monty street",
                    "zipcode": 33306,
                    "city" : "Florida"
                }
            ]
        }
    ]
 }


 */


 str = "{\"name\": \"Maaike\", \"age\": 30}"; //escaped double quotes used
  obj = JSON.parse(str);  //str to json obj
 console.log(obj.name, "is", obj.age);


 dog = {
 "name": "wiesje",
 "breed": "dachshund"
 };
 let strdog = JSON.stringify(dog); //jjson obj to str
 console.log(typeof strdog);
 console.log(strdog);


//callbacks
/*
 function doSomething(callback) {  
    callback();
 }
 function sayHi() {
    console.log("Hi!");
 }
 doSomething(sayHi);
 */

/*getGrade(85, judge());
👉 You’re calling the function immediately and passing its return value — not the function itself.

But we want to pass the function as a value, so that getGrade() can call it later. That’s why we just pass:*/
/*A callback is a function that is passed to another function as an argument, so it can be called (back) later.*/






  function judge(grade) {
    switch (true) {
      case grade === "A":
        console.log("You got an", grade, ": amazing!");
        break;
      case grade === "B":
        console.log("You got a", grade, ": well done!");
        break;
      case grade === "C":
        console.log("You got a", grade, ": alright.");
        break;
      case grade === "D":
        console.log("You got a", grade, ": hmmm...");
        break;
      default:
        console.log("An", grade, "! What?!");
    }
  }

  function getGrade(score, callback) {
    let grade;

    switch (true) {       //switch true used,so like whichever case is true is selected.
      case score >= 90:
        grade = "A";
        break;
      case score >= 80:
        console.log(score); // Optional debug log
        grade = "B";
        break;
      case score >= 70:
        grade = "C";
        break;
      case score >= 60:
        grade = "D";
        break;
      default:
        grade = "F";
    }

    callback(grade);
  }

  getGrade(85, judge); // Example call


/* setInterval(encourage, 500); //callback
 function encourage() {
 console.log("You're doing great, keep going!");
 }*/
/* You can call these parameters anything you want, but resolve or 
res and reject or rej are most common.*/




  let promise33 = new Promise(function (resolve, reject) {
    let x = 20;
    if (x > 10) {
      resolve(x);
    } else {
      reject("Too low");
    }
  });

  promise33.then(
    function (value) {
      console.log("Success:", value);//resolve
    },
    function (error) {
      console.log("Error:", error);//reject
    }
  );  //semicolons /* .then() is always asynchronous — it runs after the current synchronous code finishes.*/



 promise = new Promise((resolve, reject) => {
    resolve("success!");
 })
 .then(value => {
        console.log(value);
        return "we";//next then uses this 'we'
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })

/*last block is a catch() 
function. If any of the functions were to result in a rejection and the Promise were 
therefore rejected, this catch() block would be executed and print whatever the 
reject() function sent to the catch() method. */

  promise = new Promise((resolve, reject) => {
    reject("oops... reject");
    })
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
/*
A Promise is an object that represents something that will finish later — like downloading a file or waiting for a timer.
await keyword to wait until 
the Promise is done. await only works in an asynchronous function.
 With the async keyword, we can make a 
function return a Promise. This makes the Promises nicer to read and look a lot like 
synchronous (non-concurrent) code.asynchronous--together*/


 function saySomething(x) {
 return new Promise(resolve => {
 setTimeout(() => {
            resolve("something" + x);
        },2000); //wait 2sec before calling resolve,setTimeout(..., 2000)
    });
 }
 async function talk(x) {
 const words =await saySomething(x);
 console.log(words);
 }
 talk(2);//all talk function start together and gave output after 2 sec
 talk(4);
 talk(8);
/*"This function might wait for something using await."

It always returns a promise, even if you don't return anything.
await pauses the async function until the promise is finished */
async function talkww(x) {
 const words = saySomething(x);
 console.log(words);
 }
talkww(10);//prints before the ending console,not after everything,promise pending
/* JavaScript is a single-threaded language. A thread 
in this context means a path of execution. If there is only a single path, this means that 
tasks will have to wait for one another and only one thing can happen at a time.*/
//call stack/*The setTimeout() task gets outsourced to the browser's web API
/* When it's done, this appears in a special place: the callback 
queue. When the call stack is empty (and only then!), the event loop will check the 
callback queue for work to do. If there are any callbacks waiting, they'll be executed, 
one by one. After every action, the event loop will check the call stack for work first.

*/

 console.log("Hi there");
 setTimeout(() => console.log("Sorry I'm late"), 1000); //1sec
 console.log(add2(4, 5));
 function add2(x, y) {
    console.log("eventloop")
    return x + y;
 }

console.log("Hi there");
 setTimeout(() => console.log("Sorry I'm late"), 0); //at end but 0 secs
 console.log(add22(4, 5));
 function add22(x, y) {
    console.log("eventloop")
    return x + y;
 }


//NEVER USE TWO WINDOWS.ONLOAD

document.addEventListener("DOMContentLoaded",function(){
  
/*
  function init() {
    console.dir(navigator.geolocation);
  }

    function init2() {
    navigator.geolocation.getCurrentPosition(showGeoPosition);
  }

  function showGeoPosition(data3) {
    console.dir(data3);
  }

init();
init2();
*/


        function init() {
          console.dir(navigator.geolocation);
        }

        function init2() {
          navigator.geolocation.getCurrentPosition(showGeoPosition, showError);
        }

        function showGeoPosition(data3) {
          console.log(data3);
          document.getElementById("outputasd").innerText =
            "Latitude: " + data3.coords.latitude +
            "\nLongitude: " + data3.coords.longitude;
        }

        /*function showError(error) {
          console.error("Geolocation error:", error);
          document.getElementById("output").innerText =
            "Error getting location: " + error.message;
        }*/

            function showError(error) {
  console.error("Geolocation error:");
  console.error("Code:", error.code);
  console.error("Message:", error.message || "No message");
  document.getElementById("output").innerText =
    "Error getting location. Code: " + error.code +
    "\nMessage: " + (error.message || "No message");
}


        init();
        init2();




});
//i skipped to 428, do canvas

// <script src="https://linktolibrary.com/librarycode.js"></script>
//jquery   $(selector).action();
//d3
//In computer science, an in-place algorithm is an algorithm that operates directly on the input data structure without requiring extra space proportional to the input size. 
//Least Recently Used (LRU)








 // ✅ Step 1: Set the path of the JSON file
    const url = 'list.json'; 
    // This is the filename of your JSON file.
    // Make sure this file is in the same folder as your HTML.

    // ✅ Step 2: Use fetch() to request the JSON file
    fetch(url)
      .then(response => {
        // This block runs when the file is successfully fetched
        // But we first check if the response is okay (200 OK)
        if (!response.ok) {
          // If there's an error, we throw it so the catch() block handles it
          throw new Error("HTTP error " + response.status);
        }

        // ✅ Step 3: Convert the response into a JavaScript object
        return response.json(); // This returns a promise with parsed JSON
      })

      .then(data => {
        // ✅ Step 4: The JSON data is ready here as a JavaScript array/object
        // Example: [{id:1, name:"Alice"}, {id:2, name:"Bob"}]

        // We loop through the array using forEach
        data.forEach(item => {
          // For each item (object), we print its details in the console
          console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);
        });
      })

      .catch(error => {
        // ✅ This runs if any error happens (e.g. file not found)
        console.error('Error fetching JSON:', error);
      });


//node.js or else php,java or c# for backend
//node.js runtime environment, express is framework in it.
/*Backticks ( ` ... ` )

The ${...} syntax to insert variables

let age = 21;
console.log(`You are ${age} years old.`); 

// Output: You are 21 years old.
backtick**** remember not ""
*/






 console.log("YOOOOOOOOOOOOOOOOO I MARKED MY ENNDDDDDDDD THIS IS JUST FOR ME")