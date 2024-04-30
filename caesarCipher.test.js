import 'jest'
import { caesarCipher } from './main.js';

test('shift abc by 1 factor', () => {
	expect(caesarCipher('abc', 1)).toBe('BCD')
})

test('shift abc by 2 factor', () => {
	expect(caesarCipher('abc', 2)).toBe('CDE')
})

test('shift neo by 1 factor', () => {
	expect(caesarCipher('neo', 1)).toBe('OFP')
})

test('shift neo by 2 factor', () => {
	expect(caesarCipher('neo', 2)).toBe('PGQ')
})

test('wrap z to a shift by 1', () => {
	expect(caesarCipher('abz', 1)).toBe('BCA')
})
test('wrap z to a shift by 4', () => {
	expect(caesarCipher('abz', 4)).toBe('EFD')
})
