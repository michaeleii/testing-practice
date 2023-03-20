import reverseStr from "./reverseString";

test("car should be rac", () => {
	expect(reverseStr("car")).toBe("rac");
});

test("hello should be olleh", () => {
	expect(reverseStr("hello")).toBe("olleh");
});
