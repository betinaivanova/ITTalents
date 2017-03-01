function isPrime(x, num) {
    if (x % num == 0) {
        return false;
    }

    if (num > x / 2) {
        return true;
    }

    return isPrime(x, num+1);
}

console.log(isPrime(3,2));