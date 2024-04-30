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
}
export { capitalize, reverseString, calculator };
