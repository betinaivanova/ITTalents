var n = Number(21); 
if(isNaN(n) || n < 10 || n > 200) {
    console.log("Invalid data. Try again!");
} else {
    for(var numbers = n; numbers >= 1; numbers--) {
        if(numbers % 7 == 0 && numbers < n) {
            process.stdout.write(numbers + " ");
        }
    }
}