var number = 1;
var arrayLength = 10;
var arrayOfNumbers = new Array(arrayLength);
arrayOfNumbers[0] = arrayOfNumbers[1] = number;
for(index = 2; index < arrayOfNumbers.length; index++) {
    arrayOfNumbers[index] = arrayOfNumbers[index-1] + arrayOfNumbers[index-2];
}
console.log(arrayOfNumbers);