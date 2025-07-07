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
 setTimeout(youGotThis, 1000); //waiting 1000ms=1sec
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
