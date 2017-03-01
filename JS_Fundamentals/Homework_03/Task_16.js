var arr = new Array(10);
arr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
for (var index = 0; index < arr.length; index++) {
    if(arr[index] < -0.231) {
        arr[index] = (parseFloat)((index + 1) * (index + 1) + 41.25);
        continue;
    }
arr[index] *= parseFloat(index + 1);
}	

console.log(arr);