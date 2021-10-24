// Variable number of students

let numberStudents = 5;

// Student List Array

let listStudents = ["Marina", "Cleyton", "Frederico", "Victor", "Ismael", "Pablo"];

// Code counter loop

for(let counter  = 0; counter < listStudents.length; counter++) {
    // console.log(counter)
    if(counter == 0) {
        console.log(counter + ": ZERO"); //  Concatenation
    } else if (counter % 2 == 1) {
        console.log(`${counter}: ODD`); // Interpolation 
    } else {
        console.log(`${counter}: PAIR`)
    }
}