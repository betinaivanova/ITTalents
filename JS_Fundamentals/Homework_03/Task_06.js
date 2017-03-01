var firstArrayOfNumbers = [13,2,7];
var secondArrayOfNumbers = [13,5,7];
var  isEqual = true;
if(firstArrayOfNumbers.length != secondArrayOfNumbers.length){
    isEqual = false;
}
if(isEqual){
    for(var index = 0; index < firstArrayOfNumbers.length; index++) {
        if(firstArrayOfNumbers[index] != secondArrayOfNumbers[index]) {
            isEqual = false;
            break;
        }
    }
    console.log("Масивите са различни.");
    console.log("Масивите имат еднакъв размер.");
} else {
    console.log("Масивите са различни.");
}