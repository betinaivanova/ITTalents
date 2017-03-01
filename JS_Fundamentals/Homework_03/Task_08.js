var arrayOfNumbers = [2,1,1,2,3,3,2,2,2,1];
var maxCount = 0;
var count = 0;
var end = 0;
var start = 0;
for(var index = 1; index <= arrayOfNumbers.length; index++) {
    if(arrayOfNumbers[index] === arrayOfNumbers[index-1]) {
        count++;
    } else {
        count = 0;
    }
    if(count > maxCount) {
        maxCount = count;
        end = index+1;
        start = index - count + 1;
    }
}
for(var index = start-1; index < end; index++) {
    process.stdout.write(arrayOfNumbers[index] + " ");
}