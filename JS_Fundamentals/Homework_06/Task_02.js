var firstWord = "uchilishe";
var secondWord = "uchenik";
var biggerWord = "";
var smallerWord = "";
if(firstWord > secondWord) {
    biggerWord = firstWord;
    smallerWord = secondWord;
} else {
    biggerWord = secondWord;
    smallerWord = firstWord;
}
var firstFive = smallerWord.slice(0,5);
var slice = biggerWord.slice(5, biggerWord.length);
console.log(biggerWord.length + " " + firstFive + slice);