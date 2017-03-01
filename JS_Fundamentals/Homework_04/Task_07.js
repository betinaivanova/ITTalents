 var arrayOfNumbers = [
     [11,12,13,14,15,16],
     [21,22,23,24,25,26],
     [31,32,33,34,35,36],
     [41,42,43,44,45,46],
     [51,52,53,54,55,56],
     [61,62,63,64,65,66]
 ];
 var sumOfElementsRows = 0;
 var allSumOfElements = 0;
 for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
     for(var cols = 0; cols < arrayOfNumbers[rows].length;cols++) {
         var sumRowsCols = rows + cols;
         if(sumRowsCols % 2 === 0) {
             sumOfElementsRows += arrayOfNumbers[rows][cols];
             process.stdout.write(arrayOfNumbers[rows][cols] + " ");
         }
     }
     allSumOfElements += sumOfElementsRows;
     process.stdout.write("сума от елементите за реда: " + sumOfElementsRows);
     sumOfElementsRows = 0;
     console.log(" ");
 }
 console.log("Сума на елементите: " + allSumOfElements);