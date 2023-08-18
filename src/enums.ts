//enum - represents a list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase convention
const enum Size { Small = 1, Medium, Large } ; 
// enum Size { Small = 0, Medium, Large } ; by default, TS compiler assigned the first member value 0;
// you can explicity state the value; 
//enum Size { Small = "s", Medium = "m", Large ="l" } ; you can state "s" but have to update the others as well;

//using const before enum shows a more optimized code

let mySize: Size = Size.Medium;
console.log(mySize)