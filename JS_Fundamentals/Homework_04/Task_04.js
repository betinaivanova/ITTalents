var arrayOfNumbers = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
for(var rows = 0; rows < arrayOfNumbers.length; rows++) {
    for(var cols = arrayOfNumbers.length-1; cols >=0; cols--) {
        process.stdout.write(arrayOfNumbers[cols][rows] + " ");
    }
    console.log("");
}