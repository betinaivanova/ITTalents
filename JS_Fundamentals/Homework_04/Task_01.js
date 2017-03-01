var arrayOfNumbers = [
    [48,72,13,14,15],
    [21,22,53,24,75],
    [31,57,33,34,35],
    [41,95,43,44,45],
    [59,52,53,54,55],
    [61,69,63,64,65]
];
var minNumber = arrayOfNumbers[0][0];
var maxNumber = arrayOfNumbers[0][0];
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers[rows].length; cols++) {
        if(minNumber > arrayOfNumbers[rows][cols]) {
            minNumber = arrayOfNumbers[rows][cols];
        }
        if(maxNumber < arrayOfNumbers[rows][cols]) {
            maxNumber = arrayOfNumbers[rows][cols];
        }
    }
}
console.log("най-малко" + " " + minNumber);
console.log("най-голямо" + " " + maxNumber);