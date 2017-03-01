var arrayOfNumbers = [
     [11,12,13,14,15,16],
     [21,22,23,24,25,26],
     [31,32,33,34,35,36],
     [41,42,43,44,45,46],
     [51,52,53,54,55,56],
     [61,62,63,64,65,66]
 ];
var sumRows = 0;
var allSum = 0;
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers.length; cols++) {
        if(rows % 2 !== 0) {
            sumRows += arrayOfNumbers[rows][cols];
            process.stdout.write(arrayOfNumbers[rows][cols] + " ");
        } 
    }
    allSum += sumRows;
    if(rows % 2 !== 0 ) {
        process.stdout.write("сума" + " " + sumRows);
    }
    console.log("");
    sumRows = 0;
}
console.log("Сума на елементите: " + allSum);