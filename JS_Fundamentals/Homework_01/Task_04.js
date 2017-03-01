var a = parseFloat("-2");
var b = parseFloat(-5);
if( !(isNaN(a)) && (!isNaN(b)) ) {
    if(a > b) {
        console.log(b,a);
    } else {
        console.log(a,b);
    }
} else {
    console.log("Невалидни данни. Опитай пак!");
}