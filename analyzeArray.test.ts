import { analyzeArray } from "./analyzeArray";

test("analyzeArray([1, 8, 3, 4, 2, 6]) should be {avg: 4, min: 1, max: 8, length: 6}", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		avg: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
