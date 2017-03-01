var str1 = "хипопотам";
var str2 = "хипопотук";
var flag = true;
if (str1.length == str2.length) {
    console.log("Двата низа са с равна дължина");
    console.log("Разлика по позиции.");
    for (index = 0; index < str1.length; index++) {
        if (str1.charAt(index) != str2.charAt(index)) {
            console.log((index + 1) + " " + str1.charAt(index) + "-" + str2.charAt(index));
            flag = false;
        }
    }
    if (flag) {
        console.log("Няма разлика, стринговете съвпадат.")
    }
} else { 
    console.log("Низовете не са с еднаква дължина и не могат да се сравняват."); 
}