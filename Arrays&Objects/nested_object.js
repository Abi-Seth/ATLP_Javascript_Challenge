const objectArr = (arr) => {
    let nestedObject = {};

    let i = 0;
    while (i < arr.length) {
        const bigObj = arr[i].split(",");
        const smallObj = bigObj[0].split(" ");

        nestedObject[smallObj[0]] = { 
            secondname: smallObj[1], 
            age: bigObj[1] 
        };
        i++;
    }

    return nestedObject;
};

const arr = [
    "Patrick wayne, 30",
    "lil wayne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alien Dwine, 22",
];

console.log(objectArr(arr));
