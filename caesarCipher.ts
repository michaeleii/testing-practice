const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const caesarCipher = (str: string, shift: number): string => {
	const strArr = str.split("");
	const shiftedArr = strArr.map((char) => shiftChar(char, shift));
	return shiftedArr.join("");
};

const shiftChar = (char: string, shift: number): string => {
	const charIndex = alphabet.indexOf(char);
	const shiftedIndex = (charIndex + shift) % 24;
	return alphabet[shiftedIndex];
};

export default caesarCipher;
