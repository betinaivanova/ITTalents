var num = Number(17571);
var tmpNumber = num;
var reverseNumber = "";
if(isNaN(num) || num < 10 || num > 30000) {
    console.log("Invalid data. Try again!");
} else {
    while(tmpNumber / 10 !== 0) {
        var digits = tmpNumber % 10;
        reverseNumber = "" + reverseNumber + digits;
        tmpNumber = Math.floor(tmpNumber / 10);
    }
    reverseNumber = Number(reverseNumber);
    if(reverseNumber === num) {
        console.log("is palindrome.");
    } else {
        console.log("is not palindrome");
    }
}