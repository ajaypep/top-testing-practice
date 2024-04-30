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

const isAlphabet = (a) => {
	const code = a.toUpperCase().charCodeAt(0);
	return code >= 65 && code <= 90;
}

const shiftedLetter = (letter, shiftFactor) => {
	const oneBelowMinCode = 'A'.charCodeAt(0) - 1;
	const normalizedCode = letter.toUpperCase().charCodeAt(0) - oneBelowMinCode;
	let code = (normalizedCode + shiftFactor) % 26;
	return String.fromCharCode(code + oneBelowMinCode);
}

const shiftedChar = (char, shiftFactor) => {
	if (isAlphabet(char)) return shiftedLetter(char, shiftFactor);
	const shiftedCode = (char.charCodeAt(0) + shiftFactor)
	return String.fromCharCode(shiftedCode);
}

const caesarCipher = (str, shiftFactor) => {
	let result = '';
	str.split('').forEach(c => result += shiftedChar(c, shiftFactor))
	return result
};

const analyzeArray = (arr) => {
	const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
	const min = arr.reduce((curr, next) => curr < next ? curr : next);
	const max = arr.reduce((curr, next) => curr > next ? curr : next);
	return { average, min, max, length: arr.length }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
