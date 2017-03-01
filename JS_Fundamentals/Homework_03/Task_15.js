var arr = [7.13, 0.2, 4.9, 5.1, 6.34, 1.12];
var first = 0;
var second = 0;
var third = 0;
for (var index = 0; index < arr.length; index++) {
    if(Math.abs(arr[index]) > first) {
        first = Math.abs(arr[index]);
    }
}
for(var index = 0; index < arr.length; index++){
    if(Math.abs(arr[index]) > second && Math.abs(arr[index])!= first) {
        second = Math.abs(arr[index]);
    }
}
for(var index = 0; index < arr.length; index++){
    if(Math.abs(arr[index]) > third && Math.abs(arr[index]) != second && Math.abs(arr[index]) != first){
        third = Math.abs(arr[index]);
    }
}
console.log(first + " " + second + " " + third);