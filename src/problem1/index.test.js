const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require('./index.js');

describe('Sum to n functions', () => {
    test('sum_to_n_a should return correct sum', () => {
        expect(sum_to_n_a(5)).toBe(15);
        expect(sum_to_n_a(10)).toBe(55);
    });

    test('sum_to_n_b should return correct sum', () => {
        expect(sum_to_n_b(5)).toBe(15);
        expect(sum_to_n_b(10)).toBe(55);
    });

    test('sum_to_n_c should return correct sum', () => {
        expect(sum_to_n_c(5)).toBe(15);
        expect(sum_to_n_c(10)).toBe(55);
    });
});