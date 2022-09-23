const search = (arr: number[], target: number, leftIndex: number, rightIndex: number): number => {
    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

export const recursiveBinarySearch = (arr: number[], target: number) => {
    return search(arr, target, 0, arr.length - 1)
}
// logn
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))  // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))  // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))  // -1
