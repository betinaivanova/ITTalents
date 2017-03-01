function fibNumber(num) {
    if(num <= 2) {
        return 1;
    }
    return fibNumber(num - 1) + fibNumber(num - 2);
}
console.log(fibNumber(12));



