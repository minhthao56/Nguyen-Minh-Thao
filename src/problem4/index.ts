
// Using for loop to calculate the sum of numbers from 1 to n
function sum_to_n_a(n: number): number {
    // complexity: O(n)
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Using formula to calculate the sum of numbers from 1 to n
function sum_to_n_b(n: number): number {
    // complexity: O(1)
    return ((1 + n) * n) / 2;
}

// Using recursion to calculate the sum of numbers from 1 to n
function sum_to_n_c(n: number): number {
    // complexity: O(n)
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}
