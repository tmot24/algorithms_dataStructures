export const powerTwo = (n: number): boolean => {
    if (n < 1) {
        return false
    }

    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2
        } else {
            return false
        }
    }

    return true
}

console.log(powerTwo(1))
console.log(powerTwo(2))
console.log(powerTwo(5))
