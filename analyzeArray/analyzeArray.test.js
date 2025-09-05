const analyzeArray = require('./analyzeArray')

test('Module Found', () => {
    expect(analyzeArray).toBeDefined
})

describe('Array functions', () => {
    const input = [1,8,3,4,2,6]
    test('returns object', () => {
        expect(typeof analyzeArray(input)).toBe('object')
    })
    test('average function found', () => {
        expect(analyzeArray(input).average).toBeDefined
    })

    test('average of array', () => {
        expect(analyzeArray(input).average).toBe(4)
    })

    test('min of array', () => {
        expect(analyzeArray(input).min).toBe(1)
    })

    test('max of array', () => {
        expect(analyzeArray(input).max).toBe(8)
    })

    test('length of array', () => {
        expect(analyzeArray(input).length).toBe(6)
    })
})