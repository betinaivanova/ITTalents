var n = Number(5);
var sum = 0;
if(isNaN(n) || n <= 0) {
    console.log("Invalid data. Try again!");
} else {
    for(var numbers = 1; numbers <= n; numbers++) {
        sum = sum + numbers;
    }
    console.log(sum);
}