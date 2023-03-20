import { avg } from "./analyzeArray";

test("avg of [1, 2, 3, 4, 5] should be 3", () => {
	expect(avg([1, 2, 3, 4, 5])).toBe(3);
});

test("avg of [1, 2, 3, 4, 5, 6] should be 3.5", () => {
	expect(avg([1, 2, 3, 4, 5, 6])).toBe(3.5);
});

test("avg of [] should be 0", () => {
	expect(avg([])).toBe(0);
});

test("avg of [1] should be 1", () => {
	expect(avg([1])).toBe(1);
});

test("avg of [1,8,3,4,2,6] should be 4", () => {
	expect(avg([1, 8, 3, 4, 2, 6])).toBe(4);
});
