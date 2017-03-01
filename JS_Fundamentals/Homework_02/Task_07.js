var n = Number(5);
var countNumbers = 0;
var numberDivideByThree = " ";
for(var numbers = 3; numbers <= n*3; numbers++) {
    if(numbers % 3 === 0) {
        numberDivideByThree = numberDivideByThree + numbers + ", ";
        countNumbers++;
    }
    if(countNumbers === n) {
        process.stdout.write(numberDivideByThree);
    }
}