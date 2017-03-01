var n = Number(5);
if(isNaN(n) || n <= 0) {
    console.log("Invalid data. Try again!");
} else {
    for(var rows = 1; rows <= n; rows++) {
        for(var stars = 1; stars < n*2; stars++) {
            if(stars >= ((n+1)-rows) && stars <= ((n-1)+rows)) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log("");
    }
}

var n = Number(5);
if(isNaN(n) || n <= 0) {
    console.log("Invalid data. Try again!");
} else {
    for(var rows = 1; rows <= n; rows++) {
        for(var stars = 1; stars < n*2; stars++) {
            if(stars == ((n+1)-rows) || (stars == (n-1)+rows) || rows == n) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            } 
        }
        console.log("");
    }
}