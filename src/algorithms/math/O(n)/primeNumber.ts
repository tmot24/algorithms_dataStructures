export const primeNumber = (n: number): boolean => {
    if (n < 2) {
        return false
    }
    /**
     * Целые числа, превышающие квадратный корень, проверять не нужно,
     * потому что всякий раз, когда «n=a*b»,
     * один из двух множителей «a» и «b» меньше или равен квадратному корню из «n».
     * */
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}


console.log(primeNumber(0))
console.log(primeNumber(-1))
console.log(primeNumber(1))
console.log(primeNumber(2))
console.log(primeNumber(4))
console.log(primeNumber(5))
