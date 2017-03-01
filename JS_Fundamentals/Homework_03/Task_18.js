var arr1 = [18,19,32,1,3, 4, 5, 6, 7, 8];
var arr2 = [1, 2, 3,4,5,16,17,18,27,11];
var arr3 = [];
for(var index = 0; index < arr1.length; index++){
    if(arr1[index] <= arr2[index]) {
        arr3[index] = arr2[index];
        continue;
    }
    arr3[index] = arr1[index];
}	
console.log(arr3);