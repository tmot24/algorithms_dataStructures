export const fibonacci = (n: number) => {
    const fib = [0, 1]

    for (let i = 2; i < n; i++) {
        const prevValue = fib[i - 1]
        const prevPrevValue = fib[i - 2]
        fib[i] = prevValue + prevPrevValue
    }

    return fib
}

console.log(fibonacci(5))
