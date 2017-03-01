var a = parseFloat("-13.2"); 
var b = parseFloat(10);
var c = parseFloat(5);
if( ( (typeof a === 'number') && !(isNaN(a)) ) && ( (typeof b === 'number') && !(isNaN(b)) ) && ( (typeof c === 'number') && !(isNaN(c)) ) ) {
    if( (c > a) && (c < b) ) {
        console.log("Числото" + " " + c + " " + "e между " + a + " " + "и" + " " + b);
    } else {
        console.log("Числото" + " " + c + " " + "НЕ e между " + a + " " + "и" + " " + b);
    }
} else {
    console.log("Невалидни данни. Опитай пак!");
}