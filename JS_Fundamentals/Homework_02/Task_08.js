var n = Number(3);
var countDigits = 0;
var digits = n-1;
for(var rows = 0; rows < n; rows++) {
    while(countDigits < n){
        process.stdout.write(digits +"");
        countDigits++;
    }
    countDigits = 0;
    digits+=2;
    console.log("");
}