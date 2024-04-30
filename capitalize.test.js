import 'jest';

import { capitalize } from './main.js';

test('capitalize one letter words', () => {
	const oneLetterWords = ['a', 'i']
	expect(capitalize(oneLetterWords[0])).toBe('A')
	expect(capitalize(oneLetterWords[1])).toBe('I')
})
test('capitalize two letter words', () => {
	const twoLetterWords = ['ne', 'lo', 'jy']
	expect(capitalize(twoLetterWords[0])).toBe('Ne')
	expect(capitalize(twoLetterWords[1])).toBe('Lo')
	expect(capitalize(twoLetterWords[2])).toBe('Jy')
})
test('capitalize three letter words', () => {
	const threeLetterWords = ['neo', 'leo', 'joy']
	expect(capitalize(threeLetterWords[0])).toBe('Neo')
	expect(capitalize(threeLetterWords[1])).toBe('Leo')
	expect(capitalize(threeLetterWords[2])).toBe('Joy')
})


