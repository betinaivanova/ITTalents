var a1 = 5;
var a2 = "dhadj";
var a3 = true;
console.log("Новите стойностите на променливите са: " + a1 + " " + a2 + " " + a3);
var tmp = a1;
a1 = a2;
a2 = a3;
a3 = tmp;
console.log("Новите стойностите на променливите са: " + a1 + " " + a2 + " " + a3);