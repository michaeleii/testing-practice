import Calculator from "./calculator";

test("1 + 1 should be 2", () => {
	expect(Calculator.add(1, 1)).toBe(2);
});

test("5 - 2 should be 3", () => {
	expect(Calculator.subtract(5, 2)).toBe(3);
});

test("2 - 5 should be -3", () => {
	expect(Calculator.subtract(2, 5)).toBe(-3);
});

test("2 * 5 should be 10", () => {
	expect(Calculator.multiply(2, 5)).toBe(10);
});

test("10 / 2 should be 5", () => {
	expect(Calculator.divide(10, 2)).toBe(5);
});

test("10 / 0 should throw an error", () => {
	expect(() => {
		Calculator.divide(10, 0);
	}).toThrow(Error);
});
