// let age: number = 20; 
// if (age < 50) 
// age += 10;

//launch.json is similar to macro in Excel

let sales: number = 123_456_789; //commas //don't always have to annotate b/c they can infer detect
let course: string = 'Typescript';
let is_published: boolean = true;
let level: //any type - avoid using this b/c goes against what TS is meant to do
level = 1;
level = 'a';

//could express as any
// function render(document: any) {
//     console.log(document)
// }

//nuclear option is to turn off strict in tsconfig.json
