function reverseNumber(n, partial=0) {
    if (n == 0) {
        return partial;
    }
    return reverseNumber(Math.floor(n / 10), partial * 10 + n % 10);
}
var num = 12321; 
if (reverseNumber(num) == num) {
    console.log(reverseNumber(num) + " " + "да");
} else {
    console.log(reverseNumber(num) + " " + "не");
}