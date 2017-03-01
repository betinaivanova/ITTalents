var arrayOfNumbers = [5,2,5,8,3];
var newArrayOfNumbers = [];
var x = [];
var arrayLength = arrayOfNumbers.length;
for (var index=0; index < arrayOfNumbers.length; index++) {
    newArrayOfNumbers[index] = arrayOfNumbers[index];
}
for(var index = 0; index < arrayLength; index++) {  
    x = arrayOfNumbers.pop();            
    newArrayOfNumbers.push(x);
}
console.log(newArrayOfNumbers);