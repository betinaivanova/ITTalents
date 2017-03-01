var n = Number(26);
var sum = 0;
 for(var numbers = 100; numbers <= 999; numbers++) {
     var lastDigit = (numbers % 10);
     var middleDigit = Math.floor((numbers / 10) % 10);
     var firstDigit = Math.floor(numbers / 100);
     sum = sum + firstDigit + middleDigit + lastDigit;

     if(sum >= 2 && sum == n) {
         process.stdout.write(numbers + " ");
    }
     sum = 0;
 }