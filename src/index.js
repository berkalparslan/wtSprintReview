const prompt = require("prompt-sync")();

const number = parseInt(prompt("Kaç sayıya kadar Fibonacci dizisi oluşturulsun? "));
console.log("🚀 ~ number:", number)

function fibonacci(n) {
    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const result = fibonacci(number);
console.log("🚀 ~ result:", result)
