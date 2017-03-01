var num = Number(47);
var arrayCards = ["2", "3", "4", "5" ,"6" ,"7" ,"8", "9", "10", "Vale", "Dama", "Pop", "Aso"];
var arrayColorCards = ["Spatiq", "Karo", "Kupa", "Pika"];
var length = 52;
var arrayCardsWithColor = new Array(length);
var index = 0;
for(var cardsIndex = 0; cardsIndex < arrayCards.length; cardsIndex++) {
    for(var colorCardsIndex = 0; colorCardsIndex < arrayColorCards.length; colorCardsIndex++) {
        arrayCardsWithColor[index] = arrayCards[cardsIndex] + " " + arrayColorCards[colorCardsIndex];
        index++;
    }
}
var str = " " + arrayCardsWithColor.slice(num-1);
console.log(str);