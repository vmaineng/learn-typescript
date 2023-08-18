//fixed length array of particular type
//used with pair of values
//should restrict to two values;

//id, name
let user: [number, string] = [1, "mai"];
user.push(1); //stores 3rd one and it will not complain;

//let user: [number, string] = [1, "mai", 0]; //compilation error b/c too many arguments for it

//tuple - represented as plain JS array
//run tsc
