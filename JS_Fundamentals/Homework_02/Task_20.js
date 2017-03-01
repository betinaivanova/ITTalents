var rows = 0;
var digits = 0;
for(rows = 1; rows <=9; rows++) {
    for(digits = rows; digits <=9; digits++) {
        process.stdout.write(digits + " ");
    }
    for(digits = 0; digits < rows; digits++) {
        process.stdout.write(digits + " ");
    }
    console.log("");
}
for (var digits = 0; digits <=9; digits++) {
    process.stdout.write(digits + " ");
}