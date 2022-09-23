const merge = (leftArr: number[], rightArr: number[]): number[] => {
    const sortedArr: number[] = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()!)
        } else {
            sortedArr.push(rightArr.shift()!)
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

export const mergeSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr)) // [-6, -2, 4, 8, 20]

// Big-O = O(nlogn)
