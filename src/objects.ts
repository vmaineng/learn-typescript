//objects in JS are dynamic, their shape can cchange throughout

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; //don't want to reutrn any value so return void
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
}; //initialize it to Mosh

// employee.name = 'Mosh';

//if hover over employee, can see object and what consists in it;

// let employee : {
//     id: number,
//     name: string
// }= { id: 1, name: ""}; //could do this but does not conceptually make sense

//adding readonly infront of id means you can't overwrite it
