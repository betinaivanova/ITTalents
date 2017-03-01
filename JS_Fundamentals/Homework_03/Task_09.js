var arrayOfNumbers = [2,3,7,-5];
var temp = 0;
for(var index = 0; index < arrayOfNumbers; index++) {
    temp = arrayOfNumbers[index];
    arrayOfNumbers[index] = arrayOfNumbers[arrayOfNumbers.length - 1 - index];
    arrayOfNumbers[arrayOfNumbers.length - 1 - index] = temp;
}
console.log(arrayOfNumbers);