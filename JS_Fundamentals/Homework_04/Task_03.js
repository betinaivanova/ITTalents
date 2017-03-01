var arrayOfNumbers = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];
var sum = 0;
var count = 0;
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers[rows].length; cols++) {
        sum += arrayOfNumbers[rows][cols];
        count++;
    }
}
var avgOfElements = sum / count;
console.log("Сумата на елементите е: " + sum);
console.log("Средноаритметичното на елементите е: " + avgOfElements);