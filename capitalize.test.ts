import capitalize from "./capitalize";

test("noodle should be Noodle", () => {
	expect(capitalize("noodle")).toBe("Noodle");
});

test("Pizza should be Pizza", () => {
	expect(capitalize("Pizza")).toBe("Pizza");
});
