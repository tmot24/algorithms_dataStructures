export const binary = (onlySortedArray: number[], target: number): number => {
    let leftIndex = 0
    let rightIndex = onlySortedArray.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === onlySortedArray[middleIndex]) {
            return middleIndex
        }

        if (target < onlySortedArray[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1
}
// O(log(n))
console.log(binary([-5, 2, 4, 6, 10], 10))  // 4
console.log(binary([-5, 2, 4, 6, 10], 6))  // 3
console.log(binary([-5, 2, 4, 6, 10], 20))  // -1


const nums = [2, 7, 11, 15]
const target = 9


const getSumIndicesMap = (nums: number[], target: number): number[] => {
    const mapNums = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const needNum = target - currentNum;
        if (mapNums.has(needNum)) {
            const indexSecondNumber = mapNums.get(needNum)!
            return [indexSecondNumber, i]
        }
        mapNums.set(currentNum, i);
    }
    return [-1, -1]
}

console.log(getSumIndicesMap(nums, target))
