const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = ['hi', 'there','mom']
const testArr4 = [{'name':'George'},{},{},{}]
describe('shuffleArray should', () => {
    // CODE HERE
    test(`return an array`, () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr4))).toBe(true)
    })
    test(`return an array of the same length as the input`, () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr3)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr4)).toHaveLength(testArr1.length)
    })
})