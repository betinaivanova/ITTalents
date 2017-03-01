var arrayOfRealNumbers = [7.1,8.5,0.2,3.7,0.99,1.4,-3.5,-110,212,341,1.2];
var newArray = [];
for(var index = 0; index < arrayOfRealNumbers.length; index++) {
    if(arrayOfRealNumbers[index] >= -2.99 && arrayOfRealNumbers[index] <= 2.99) {
        newArray.push(arrayOfRealNumbers[index]);
    }
}
console.log(newArray);