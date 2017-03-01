var a = parseFloat("-5");
var b = parseFloat(-2);
var c = parseFloat(true);
if( !(isNaN(a)) && !isNaN(b) && !(isNaN(c)) ) {
    if( (a >= b) && (b >= c) ) {
        console.log(a,b,c);
    }
    if( (a >= c) && (c >= b) ) {
        console.log(a,c,b);
    }
    if( (b >= a) && (a >= c) ) {
        console.log(b,a,c);
    }
    if( (b >= c) && (c >= a) ) {
        console.log(b,c,a);
    }
    if( (c >= a) & (a >= b) ) {
        console.log(c,a,b);
    } else {
        console.log(c,b,a);
    }
} else {
    console.log("Невалидни данни. Опитай пак!");
}