function sum(num1, num2,index) {
    if(index >= num2) {
        return 0;
    }
    return num1 + sum(num1,num2, index+1);
}
console.log(sum(4,5,0));