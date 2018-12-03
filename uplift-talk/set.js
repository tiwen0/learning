const lol = () => console.log("------------------------------------------------------------------------------")

let numberSet = new Set([{
    id: 1,
    value: "cow"
}, {
    id: 2,
    value: "dog"
}, {
    id: 3,
    value: "cat"
}, {
    id: 4,
    value: "monkey"
}, {
    id: 5,
    value: "horse"
}, {
    id: 6,
    value: "tianna"
}]);

let stringSet = new Set([{
    id: "t",
    value: "cow"
}, {
    id: "i",
    value: "dog"
}, {
    id: "a",
    value: "cat"
}, {
    id: "n",
    value: "monkey"
}, {
    id: "n",
    value: "horse"
}, {
    id: "a",
    value: "tianna"
}]);

// console.log(numberSet)
// lol()
// console.log([...numberSet])

// 1. Search/Find
const setFind = () => {
    let id = 1
    let findObject = [...numberSet].find(object => object.id === id)

    console.log("Number Set:")
    console.log(numberSet)
    lol()

    console.log(`When id = ${id}, the value is "${findObject.value}"`)
    lol()
}

setFind()

// 2. Sort
let sortSet = () => {
    console.log("Original set:")
    console.log(stringSet)
    let sortedSet = new Set([...stringSet].sort((a, b) => a['id'].localeCompare(b['id'])))
    console.log("Sorted set:")
    console.log(sortedSet)
    lol()
}

// sortSet()

// 3. Remove Duplicates
const mySet = new Set([1, 2, 2, 4, 5, 5]);

const objectSet = new Set([{
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
}]);

let removeDuplicates = (set) => {
    console.log(set);
}

// removeDuplicates(mySet)

// removeDuplicates(objectSet)