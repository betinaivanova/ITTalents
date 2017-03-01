var numberOne = Number(2);
var numberTwo = Number(2);
if(isNaN(numberOne) || isNaN(numberTwo) || (numberOne < 1 || numberOne > 9) || (numberTwo < 1 || numberTwo > 9)) {
    console.log("Invalid data. Try again!");
} else {
    for(var i = 1; i <= numberOne; i++) {
        for(var j = 1; j <= numberTwo; j++) {
            process.stdout.write(i + " * " + j + " = " + i*j);
            console.log("");
        }
    }
}