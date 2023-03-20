import { min } from "./analyzeArray";
test("[] should be 0", () => {
	expect(min([])).toBe(0);
});

test("[1] should be 1", () => {
	expect(min([1])).toBe(1);
});

test("[1, 2, 3, 4, 5] should be 1", () => {
	expect(min([1, 2, 3, 4, 5])).toBe(1);
});

test("[1,8,3,4,2,6] should be 1", () => {
	expect(min([1, 8, 3, 4, 2, 6])).toBe(1);
});
