var hours = parseInt(5);
var sumMoney = parseFloat("10");
var healthy = false;
if( !(isNaN(hours)) && !(isNaN(sumMoney)) && (typeof healthy === 'boolean') ) {
    if(healthy) {
        console.log("Няма да излизам.")
        if(sumMoney > 0) {
            console.log("Ще си купя лекарства.")
        } else {
            console.log("Ще си стоя вкъщи и ще пия чай.")
        }
    } else {
        if(sumMoney < 10) {
            console.log("Ще отида на кафе.");
        } else {
            console.log("Здрав съм.Богат съм.");
        }
    }
} else {
    console.log("Невалидни данни. Опитай пак!");
}