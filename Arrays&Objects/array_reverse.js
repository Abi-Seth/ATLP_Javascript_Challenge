function reverseArr(arr) {
    let reversedArr = new Array();
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log(reverseArr([11, 7, 3, 9, 89]));
