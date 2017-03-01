var number = Number(11);
var newNumber = " ";
if(isNaN(number) || number < 10 || number > 99) {
    console.log("Invalid data. Try again!");
} else {
    do {
        if(number % 2 !== 0) {
            number = number * 3 + 1;
            newNumber = newNumber + number + " ";
        }
        if(number % 2 === 0) {
            number = number * 0.5;
            newNumber = newNumber + number + " ";
        }
    } while(number > 1)

    console.log(newNumber);
}