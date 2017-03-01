var num = Number(7);
var sum = 0;
if(isNaN(num) || num <= 1) {
    console.log("Invalid data. Try again!");
} else {
    for(var numbers = 1; numbers <= num; numbers++) {
        sum = sum + numbers;
    }
    console.log("The result is: " + sum);
}