function printTriangle(row, start, end) {
    if(row > end) {
        return;
    }
    for(var row = start; row <= end; row++) {
        for(var num = start; num <= row; num++) {
            process.stdout.write(num + " ");
        }
        console.log("");
    }
    printTriangle(row+1,start,end);
}
console.log(printTriangle(1,1,9));