var a = Number(12);
var b = Number(15);
if(isNaN(a) || isNaN(b)) {
    console.log("Invalid data. Try again!");
} else {
    if(a > b) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    for(var numbers = a; numbers <= b; numbers++) {
        process.stdout.write(numbers + " ");
    }
}