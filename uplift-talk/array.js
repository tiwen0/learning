const lol = () => console.log("------------------------------------------------------------------------------")

let objectArr = [{
    id: 1,
    value: "red"
}, {
    id: 2,
    value: "orange"
}, {
    id: 3,
    value: "yellow"
}, {
    id: 4,
    value: "black"
}, {
    id: 5,
    value: "green"
}]

let stringArr = ["red", "orange", "yellow", "black", "green"]

let numberArr = [988, 23, 2345, -1, -1, 6442, 0, 33, 7777, -999999]

// 1. Search/Find
const arrayFind = () => {
    let id = 2
    let findItem = objectArr.find(item => item.id === id)
    console.log("Object array:")
    console.log(objectArr)
    lol()

    console.log(`When id = ${id}, the value is "${findItem.value}"`)
    lol()
}

// arrayFind()

// 2. Sort
const arraySortString = () => {
    console.log("Original array:", stringArr)

    let sortedArr = stringArr.sort()
    console.log("Sorted array:", sortedArr)
    lol()
}

const arraySortNumber = () => {
    console.log("Original array:", numberArr)

    // let sortedArr = numberArr.sort()
    let sortedArr = numberArr.sort((a, b) => a - b)
    console.log("Sorted array:", sortedArr)
    lol()
}

const arraySortObject = () => {
    console.log("Original array:")
    console.log(objectArr)

    let sortedArr = objectArr.sort((a, b) => a['value'].localeCompare(b['value']))
    console.log("Sorted array:")
    console.log(sortedArr)
    lol()
}

// arraySortString()

// arraySortNumber()

// arraySortObject()

// 3. Remove Duplicates
let arr1 = [1, 2, 2, 4, 5, 5];

let removeNumDuplicates = () => {
    let result = [...new Set(arr1)];
    console.log(result)
}

let arr2 = [{
    id: "w",
    value: "cow"
}, {
    id: "w",
    value: "cow"
}, {
    id: "t",
    value: "cat"
}, {
    id: "h",
    value: "monkey"
}];

let removeObjDuplicates = () => {
    let result = arr2.filter((obj, index) => {
        return arr2.map(obj => obj['id']).indexOf(obj['id']) === index;
    });
    console.log(result)
}

// removeNumDuplicates()

// removeObjDuplicates()