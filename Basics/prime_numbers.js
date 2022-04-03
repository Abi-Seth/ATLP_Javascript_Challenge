const isPrime = (num) => {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        let x = 2;
        while(x < num) {
            if (num % x === 0) {
                return false;
            }
            x++;
        }
    }
    return false;
};

const primeNumbers = (arr) => {
    let filtered = new Array();

    arr.forEach((element) => {
        if (isPrime(element)) {
            filtered.push(element);
        }
    });

    return filtered;
};

console.log(primeNumbers([22, 11, 5, 9, 10, 1, 2]));
