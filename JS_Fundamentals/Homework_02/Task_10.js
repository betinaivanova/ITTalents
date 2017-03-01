var n = Number(4);
if(n === 2) {
    console.log("is prime");
} else if(n === 1 || n % 2 === 0) {
    console.log("is not prime.");
} else {
    var isPrime = true;
    for(var numbers = 3; numbers <= n/2; numbers+=2) {
        if(n % numbers === 0 ) {
            isPrime = false;
        }
    }
    if(isPrime) {
        console.log("is prime.");
    } else {
        console.log("is not prime.");
    }
}