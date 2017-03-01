var arr = [1, 3, 2, 4, 3, 7];
var isZigZag = true;
for(var index = 1; index < arr.length-1; index++){
    if(index % 2 === 0 && (!(arr[index] < arr[index-1] && arr[index] < arr[index+1]))){
        isZigZag = false;
        break;
    }
}
if(isZigZag) {
    console.log("изпълнява изискванията за зигзагообразна нагоре редица");
} else {
    console.log("не изпълнява изискванията за зигзагообразна нагоре редица");
}