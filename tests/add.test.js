const add = require("../index.js");

describe('add', () => {
test("should return the sum of numbers in a comma-separated string", () => {
	expect(add("2,3,4")).toBe(9);
});

test("should return zero if all numbers are zero", () => {
	expect(add("0,0,0")).toBe(0);
});

test('returns 0 for an empty string', () => {
	expect(add('')).toBe(0);
});

test('handles numbers separated by commas and new lines', () => {
	expect(add('1\n2,3')).toBe(6);
});

test('handles numbers separated by new lines only', () => {
	expect(add('1\n2\n3')).toBe(6);
});

test('handles numbers with a custom semicolon delimiter', () => {
	expect(add('//;\n1;2')).toBe(3);
});

test('handles numbers with a custom pipe delimiter', () => {
	expect(add('//|\n1|2|3')).toBe(6);
});

test('handles large numbers with a custom delimiter', () => {
	expect(add('//;\n1000000;2000000;3000000')).toBe(6000000);
});

})