import { max } from "./analyzeArray";
test("[] should be 0", () => {
	expect(max([])).toBe(0);
});

test("[1] should be 1", () => {
	expect(max([1])).toBe(1);
});

test("[1, 2, 3, 4, 5] should be 5", () => {
	expect(max([1, 2, 3, 4, 5])).toBe(5);
});

test("[1,8,3,4,2,6] should be 8", () => {
	expect(max([1, 8, 3, 4, 2, 6])).toBe(8);
});
