function sum_to_n_a(n: number): number {
    // complexity: O(n)
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_b(n: number): number {
    // complexity: O(1)
    return ((1 + n) * n) / 2;
}

function sum_to_n_c(n: number): number {
    // complexity: O(n)
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}