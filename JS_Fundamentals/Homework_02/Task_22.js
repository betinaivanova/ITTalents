var n = Number(1);
var number = n + 1;
var count = 0;
if(isNaN(n) || n < 1 || n > 999) {
    console.log("Invalid data. Try again!");
} else {
    while(count < 10) {
        if(number % 2 === 0 || number % 3 === 0 || number % 5 === 0 ) {
            count++;
            process.stdout.write(count + ":" + number + " ");
        }
        number++;
    }
}