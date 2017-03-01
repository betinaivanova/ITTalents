var arrayOfNumbers = [10, 3, 5, 8, 6 ,-3, 1];
var minOfElements = arrayOfNumbers[0];
for(index = 0; index < arrayOfNumbers.length; index++) {
    if(arrayOfNumbers[index] % 3 === 0) {
        minOfElements = arrayOfNumbers[index];
    }
}
for(index = 0; index < arrayOfNumbers.length; index++) {
    if(arrayOfNumbers % 3 === 0 && arrayOfNumbers < minOfElements) {
        minOfElements = arrayOfNumbers[index];
    }
}
console.log("Най-малкото число кратно на 3 е: "+ minOfElements);