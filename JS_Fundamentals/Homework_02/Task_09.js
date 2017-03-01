var a = Number(1);
var b = Number(107);
var sum = 0;
if(isNaN(a) || isNaN(b)) {
    console.log("Invalid data. Try again!");
} else {
    if(a > b) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    for(var numbers = a; numbers <= b; numbers++) {
        if(numbers % 3 === 0) {
            process.stdout.write("skip " + numbers + ", ");
        } else {
            sum = sum + numbers * numbers;
            process.stdout.write(`${numbers*numbers}` + ", ");
        }
        if(sum > 200) {
            break;
        } 
    }  
}