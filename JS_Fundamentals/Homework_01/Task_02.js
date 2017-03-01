var a = parseInt(6);
var b = parseInt(3);
var sum = a + b;
var sub = a - b;
var multiplication = a * b;
if( !(isNaN(a)) && !(isNaN(b)) ) {
    if( b > 0) {
        var part = parseInt(a / b);
        var remainder = a % b;
        console.log("Частното на числата " + a + " и " + b + " е: " + part);
         console.log("Остатъкът от делението на числата " + a + " и " + b + " е: " + remainder);
    } else {
        console.log("На нула не се дели!!!");
        console.log("Остатъкът от делението на числата " + a + " и " + b + " е: " + a);
    }
    console.log("Сборът на числата " + a + " и " + b + " е: " + sum);
    console.log("Разликата на числата " + a + " и " + b + " е: " + sub);
    console.log("Произведението на числата " + a + " и " + b + " е: " + multiplication);

} else {
    console.log("Невалидни данни. Опитай пак!");
}