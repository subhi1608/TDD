const add = require("../index.js");

test("should return the sum of numbers in a comma-separated string", () => {
	expect(add("2,3,4")).toBe(9);
});

test("should return zero if all numbers are zero", () => {
	expect(add("0,0,0")).toBe(0);
});
