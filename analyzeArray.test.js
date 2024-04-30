import { analyzeArray } from './main.js';

test('two element array', () => {
	expect(analyzeArray([1, 2])).toStrictEqual({ average: 1.5, min: 1, max: 2, length: 2 })
})

test('three element array', () => {
	expect(analyzeArray([1, 2, 3])).toStrictEqual({ average: 2, min: 1, max: 3, length: 3 })
})

test('6 element array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]))
		.toStrictEqual({ average: 4, min: 1, max: 8, length: 6 })
})

