var arrayOfNumbers = [1,2,3,4,5,6,7];
var temp = arrayOfNumbers[0];
arrayOfNumbers[0] =arrayOfNumbers[1];
arrayOfNumbers[1] = temp;

arrayOfNumbers[2] = arrayOfNumbers[2] + arrayOfNumbers[3];
arrayOfNumbers[3] = arrayOfNumbers[2] - arrayOfNumbers[3];
arrayOfNumbers[2] = arrayOfNumbers[2] - arrayOfNumbers[3];

arrayOfNumbers[4] = arrayOfNumbers[4] * arrayOfNumbers[5];
arrayOfNumbers[5] = arrayOfNumbers[4] / arrayOfNumbers[5];
arrayOfNumbers[4] = arrayOfNumbers[4] / arrayOfNumbers[5];

console.log(arrayOfNumbers);