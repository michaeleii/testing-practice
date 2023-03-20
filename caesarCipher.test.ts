import caesarCipher from "./caesarCipher";

test("aaa with a shift of 3 should be ddd", () => {
	expect(caesarCipher("aaa", 3)).toBe("ddd");
});

test("abc with a shift of 5 should be fgh", () => {
	expect(caesarCipher("abc", 5)).toBe("fgh");
});

test("xyz with a shift of 3 should be abc", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("yaaz with a shift of 4 should be ", () => {
	expect(caesarCipher("yaaz", 4)).toBe("ceed");
});

test("abc with a shift of 26 should be abc", () => {
	expect(caesarCipher("abc", 26)).toBe("abc");
});

test("abc with a shift of 0 should be abc", () => {
	expect(caesarCipher("abc", 0)).toBe("abc");
});

test("abc with a shift of -1 should be zab", () => {
	expect(caesarCipher("abc", -1)).toBe("zab");
});

test("abc with a shift of 30 should be efg", () => {
	expect(caesarCipher("abc", 30)).toBe("efg");
});

test("AAA with a shift of 3 should be DDD", () => {
	expect(caesarCipher("AAA", 3)).toBe("DDD");
});

test("a.b.c with a shift of 3 should be d.e.f", () => {
	expect(caesarCipher("a.b.c", 3)).toBe("d.e.f");
});

test("A.b.C with a shift of 3 should be D.e.F", () => {
	expect(caesarCipher("A.b.C", 3)).toBe("D.e.F");
});
