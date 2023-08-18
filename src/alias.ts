//continuing off of objects


//list all properties and methods an employee should have
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
      console.log(date);
    }
  };