export const powerTwoBitWise = (n: number) => {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

console.log(powerTwoBitWise(1))
console.log(powerTwoBitWise(2))
console.log(powerTwoBitWise(5))
