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

function sortArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (isPrime(arr[i]) || isPrime(arr[j])) {
                if (isPrime(arr[i])) {
                    arr.splice(i, 1);
                    break;
                }
                if (isPrime(arr[j])) {
                    arr.splice(j, 1);
                }
            } else {
                if (arr[i] < arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

const arr = [71, 2, 8, 9, 11, 39, 28];
console.log(sortArr(arr));