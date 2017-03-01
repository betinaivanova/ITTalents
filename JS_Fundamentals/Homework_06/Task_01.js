var firstStr = "aaaaaaaaaaaaaGgdkdsjjkfaaaaaaaaaaaar";
var secondStr = "fsgfGGfgdfhjhfshGGFsh";
var firstStrToUpper = firstStr.toLocaleUpperCase();
var firstStrToLower = firstStr.toLocaleLowerCase();
var secondStrToUpper = secondStr.toLocaleUpperCase();
var secondStrToLower = secondStr.toLocaleLowerCase();
if(firstStr.length > 40 || secondStr.length > 40) {
    console.log("Invalid data");
} else {
    console.log(firstStrToUpper + " " + firstStrToLower + " " + secondStrToUpper + " " + secondStrToLower);

}