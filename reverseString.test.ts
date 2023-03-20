import { reverseString } from "./reverseString";

test("car should be rac", () => {
	expect(reverseString("car")).toBe("rac");
});

test("hello should be olleh", () => {
	expect(reverseString("hello")).toBe("olleh");
});
