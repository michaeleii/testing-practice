import { length } from "./analyzeArray";

test("length of [] should be 0", () => {
	expect(length([])).toBe(0);
});

test("length of [1] should be 1", () => {
	expect(length([1])).toBe(1);
});

test("length of [1,8,3,4,2,6] should be 6", () => {
	expect(length([1, 8, 3, 4, 2, 6])).toBe(6);
});
