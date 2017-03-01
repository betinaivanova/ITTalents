var arrayOfNumbers = [-23, -55, 17, 75, 56, 105, 134];
var count = 0;
for(var index = 0; index < arrayOfNumbers.length; index++) {
    if(arrayOfNumbers[index] % 5 === 0 && arrayOfNumbers[index] > 5) {
         count++;
        process.stdout.write(arrayOfNumbers[index] + " ");
    }
}
 process.stdout.write(count + " " + "числа");