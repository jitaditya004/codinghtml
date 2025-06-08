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

  