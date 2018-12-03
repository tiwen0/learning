const lol = () => console.log("------------------------------------------------------------------------------")

let numberMap = new Map([
    [0, "zero"],
    [1111, "one"],
    [25, "two"],
    [3, "three"],
    [4, "four"],
    [54, "five"]
])

let stringMap = new Map([
    ["zero", 0],
    ["one", "one"],
    ["two", "Tianna"],
    ["three", 3],
    ["four", 4],
    ["five", "six"]
])

// for (let entry of numberMap) {
//     console.log(entry)
// }

// 1. Search/Find
let findByKey = (key, map) => map.get(key)

let findByNumberKey = () => {
    let key = 54
    console.log(`When key = ${key}, the value is "${findByKey(key, numberMap)}"`)
    lol()
}

let findByStringKey = () => {
    let key = "zero"
    console.log(`When key = ${key}, the value is "${findByKey(key, stringMap)}"`)
    lol()
}

// findByNumberKey()

// findByStringKey()


// 2. Sort
let sortMap = () => {
    console.log("Original map:")
    console.log(stringMap)
    let sortedMap = new Map([...stringMap].sort())
    console.log("Sorted map:")
    console.log(sortedMap)
    lol()
}

// sortMap()

// 3. Remove Duplicates
let myMap = new Map([
    [3, 'three'],
    [2, 'two'],
    [2, 'four']
]);

let removeDuplicates = () => {
    console.log(myMap);
}

// removeDuplicates()