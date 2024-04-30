import 'jest'
import { calculator } from './main.js';

test('add 1 and 2', () => {
	expect(calculator.add(1, 2)).toBe(3)
})
test('add 2 and 2', () => {
	expect(calculator.add(2, 2)).toBe(4)
})

test('add 0 and -1', () => {
	expect(calculator.add(0, -1)).toBe(-1)
})

test('add 0 and 2', () => {
	expect(calculator.add(0, 2)).toBe(2)
})

test('subtract 0 and 2', () => {
	expect(calculator.subtract(0, 2)).toBe(-2)
})
test('divide 0 and 2', () => {
	expect(calculator.divide(0, 2)).toBe(0)
})
test('divide 2 and 0', () => {
	expect(() => { calculator.divide(2, 0) }).toThrow('division by zero');
})
test('multiply 0 and 1', () => {
	expect(calculator.multiply(0, 1)).toBe(0)
})
test('multiply 1 and 1', () => {
	expect(calculator.multiply(1, 1)).toBe(1)
})
