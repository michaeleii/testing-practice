const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // ["a", "b", "c", ...]

const uppercaseAlphabet = alphabet.join("").toUpperCase().split(""); // ["A", "B", "C", ...]

const caesarCipher = (str: string, shift: number): string => {
	const strArr = str.split("");
	const shiftedArr = strArr.map((char) => shiftChar(char, shift));
	return shiftedArr.join("");
};

const shiftChar = (char: string, shift: number): string | undefined => {
	let charIndex = alphabet.indexOf(char);
	if (charIndex === -1) {
		if (uppercaseAlphabet.includes(char)) {
			charIndex = uppercaseAlphabet.indexOf(char);
			const shiftedIndex = (charIndex + shift) % 26;
			return uppercaseAlphabet.at(shiftedIndex);
		} else {
			return char;
		}
	} else {
		const shiftedIndex = (charIndex + shift) % 26;
		return alphabet.at(shiftedIndex);
	}
};

export default caesarCipher;
