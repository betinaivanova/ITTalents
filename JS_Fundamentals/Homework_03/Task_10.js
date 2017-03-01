var arrayOfNumbers = [1,2,3,4,5,6,7,8];
var sum = 0;
for(var index = 0; index < arrayOfNumbers.length; index++) {
    sum += arrayOfNumbers[index];
}
sum /= arrayOfNumbers.length;
var epsilon = Math.abs(sum - arrayOfNumbers[0]);
var number = arrayOfNumbers[0];
for(var index = 0; index < arrayOfNumbers.length; index++) {
    if(Math.abs(sum - arrayOfNumbers[index]) < epsilon){
        epsilon = Math.abs(sum - arrayOfNumbers[index]);
        number = arrayOfNumbers[index];
    }
}
console.log("средна стойност " + sum + " най-близка стойност " + number);