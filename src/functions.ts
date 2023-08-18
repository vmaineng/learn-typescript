function calculateTax(income: number, taxYear = 2022): number { //stating we expect a number for a return

    if (taxYear < 2022) 
    return income * 1.5
    return income * 1.3;
   
   // return 0; //if return "a", it would be a compilation error
}

calculateTax(10_000, 2022)
// calculateTax(10_000, 2022)

//always properly annonate for functions
//specificy return type

//taxYear? = optional if it is not defined
//taxYear = 2022 = make it default