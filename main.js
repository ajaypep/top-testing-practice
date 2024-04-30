const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
const reverseString = (str) => str.split('').reverse().join('')
const calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	divide(a, b) {
		if (b === 0) throw new Error('division by zero');
		return a / b;
	},
	multiply(a, b) {
		return a * b;
	},
};

const shiftedLetter = (letter, shiftFactor) => {
	const oneBelowMinCode = 'A'.charCodeAt(0) - 1;
	const normalizedCode = letter.toUpperCase().charCodeAt(0) - oneBelowMinCode;
	let code = (normalizedCode + shiftFactor) % 26;
	return String.fromCharCode(code + oneBelowMinCode);
}

const caesarCipher = (str, shiftFactor) => {
	let result = '';
	str.split('').forEach(c => result += shiftedLetter(c, shiftFactor))
	return result
};

export { capitalize, reverseString, calculator, caesarCipher };
