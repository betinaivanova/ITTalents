var n = Number(4);
var symbol = String("+");
for(rows = 1; rows <= n; rows++) {
    for(var stars = 1; stars <= n; stars++) {
        if(rows == 1 || rows == n || stars == 1 || stars == n) {
            process.stdout.write("*");
        } else {
            process.stdout.write(symbol);
        }
    }
    console.log("");
}