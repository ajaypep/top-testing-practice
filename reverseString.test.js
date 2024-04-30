import 'jest'
import { reverseString } from './main.js'

test('reverse 2 lengthed string', () => {
	expect(reverseString('aj')).toBe('ja')
	expect(reverseString('no')).toBe('on')
	expect(reverseString('pe')).toBe('ep')
})

test('reverse string with whitespace', () => {
	expect(reverseString('    ')).toBe('    ');
	expect(reverseString('aj no')).toBe('on ja')
	expect(reverseString('neo null')).toBe('llun oen')
})
test('reverse empty string', () => {
	expect(reverseString('')).toBe('')
})
