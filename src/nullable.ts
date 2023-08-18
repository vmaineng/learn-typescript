function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase());
    else
    console.log('Hola!')
}

greet(null);

//strictNullchecks is enable and should never touch in tsconfig.json

