function inplace_reverse(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
    return arr;
}

let number_arr = [7, 9, 12, 89, 11, 3];
console.log(inplace_reverse(number_arr));
