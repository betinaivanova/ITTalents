var arrayOfNumbers = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
var sumRows = 0, maxSumRows = 0;
var sumCols = 0, maxSumCols = 0;

for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = 0; cols < arrayOfNumbers[rows].length; cols++) {
        sumRows += arrayOfNumbers[rows][cols];
        sumCols += arrayOfNumbers[cols][rows];
    }
    if(sumRows > maxSumRows) {
        maxSumRows = sumRows;
    }
    if(sumCols > maxSumCols) {
        maxSumCols = sumCols;
    }
    sumRows = 0;
    sumCols = 0;
}
console.log("най-голяма сума по редове: " + maxSumRows);
console.log("най-голяма сума по колони: " + maxSumCols);
if(maxSumRows > maxSumCols) {
    console.log("Максималната сума по редове е > от максималната сума по колони");
} else if(maxSumRows < maxSumCols) {
    console.log("Максималната сума по колони е > от максималната сума по редове");
} else {
    console.log("Сумите са равни.");
}