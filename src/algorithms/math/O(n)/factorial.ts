export const factorial = (n: number) => {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i
    }

    return result
}

console.log(factorial(4))
