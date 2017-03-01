for(var numbers = 100; numbers <= 999; numbers++) {
    var lastDigit = (numbers % 10);
    var middleDigit = Math.floor((numbers / 10) % 10);
    var firstDigit = Math.floor(numbers / 100);
    if(firstDigit !== middleDigit && middleDigit !== lastDigit && lastDigit !== firstDigit) {
        process.stdout.write(numbers + " ");
    }
}