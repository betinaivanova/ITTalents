var arrayOfNumbers = [
    [1,4,6,3],
    [5,9,7,2],
    [4,8,1,9],
    [2,3,4,5]
];
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers[rows].length; cols++) {

    }
    process.stdout.write(arrayOfNumbers[rows][rows] + " ");
}
console.log(" ");
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers[rows].length; cols++) {

    }
     process.stdout.write(arrayOfNumbers[rows][arrayOfNumbers.length - rows - 1] + " ");
}