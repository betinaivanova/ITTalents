var arraySize = 4;
var arrayOfNumbers = new Array(arraySize);
arrayOfNumbers = [2,3,-11,7];
var secondArrayOfNumbers = new Array(arraySize);
secondArrayOfNumbers[0] = arrayOfNumbers[1];
secondArrayOfNumbers[secondArrayOfNumbers.length - 1] = arrayOfNumbers[arrayOfNumbers.length - 1];
for(var index = 1; index < arrayOfNumbers.length - 1; index++) {
    secondArrayOfNumbers[index] = arrayOfNumbers[index - 1] + arrayOfNumbers[index + 1];
}
console.log(secondArrayOfNumbers);