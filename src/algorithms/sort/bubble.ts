export const bubble = (arr: number[]): number[] => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

const arr = [8, 20, -2, 4, -6]
console.log(bubble(arr)) // [-6, -2, 4, 8, 20]

// O(n^2)
