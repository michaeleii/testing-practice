import caesarCipher from "./caesarCipher";

test("aaa with a shift of 3 should be ddd", () => {
	expect(caesarCipher("aaa", 3)).toBe("ddd");
});

test("abc with a shift of 3 should be def", () => {
	expect(caesarCipher("abc", 3)).toBe("def");
});

test("xyz with a shift of 3 should be abc", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});
