export const insertionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let indexAlreadySortedElements = i - 1
        while (indexAlreadySortedElements >= 0 && arr[indexAlreadySortedElements] > numberToInsert) {
            arr[indexAlreadySortedElements + 1] = arr[indexAlreadySortedElements]
            indexAlreadySortedElements = indexAlreadySortedElements - 1
        }
        arr[indexAlreadySortedElements + 1] = numberToInsert
    }
    return arr
}

const arr = [8, 20, -2, 4, -6]
console.log(insertionSort(arr)) // [-6, -2, 4, 8, 20]

// Big-O = O(n^2)
