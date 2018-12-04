// 1. Search/Find

//// Array

let arrayFind = (id) => array.find(item => item.id === id)
arrayFind()

//// Set

let setFind = (id) => [...set].find(item => item.id === id)
setFind()

//// Map

let mapFind = (key) => map.get(key)
// Key can be number/string
mapFind()

//// Array: cannot find the one when there are multiple same ids
//// Set: no build-in find function
//// Map: key is unique => fast searching

// 2. Sort

//// Array

////// Sort strings
array.sort()
// sort function will change the original array

////// Sort numbers
array.sort((a, b) => a - b)

////// Sort objects
array.sort((a, b) => a["value"].localeCompare(b["value"]))

//// Set

let sortedSet = [...set].sort()
console.log(sortedSet)

//// Map

let sortedMap = [...map].sort()
console.log(sortedMap)
// each pair of key and value will be returned as a mini array
// array.sort() is cleaver, it will compare the first value of each mini array first then compare the second one

////Array: with build-in sort function
////Set: no build-in sort function
////Map: no build-in sort function

// 3. Remove Duplicates

//// Set

// Will talk about 'set' first, since set does not allow duplicates
console.log(set)
// For object set, need to assign object to a variable first


//// Array

let newArr = [...new Set(array)]
console.log(newArr)

let result = arr5.filter((obj, index) => {
    return arr5.map(obj => obj["id"]).indexOf(obj["id"]) === index
})
console.log(result)

//// Map

// Key needs to be unique
console.log(map)

////Array: Cannot remove duplicates straightforward
////Set: Automatically remove duplicates
////Map: Always keep the last item in duplicates