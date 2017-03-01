var n = Number(5);
var fact = 1;
if(isNaN(n) || n < 1) {
    console.log("Invalid data.");
} else {
    do {
        fact = fact * n;
        n--;

    } while (n > 1)
    console.log(fact);
}