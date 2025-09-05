const reverseString = require('./reverseString')

test('Module Found', () => {
    expect(reverseString).toBeDefined
})

test('Empty String', () => {
    expect(reverseString()).toBe('')
})

test('One letter', () => {
    expect(reverseString('a')).toBe('a')
})

test('One Word', () => {
    expect(reverseString('Hello')).toBe('olleH')
})

test('palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar')
})

test('Multiple words', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})

test('Whole sentence', () => {
    let actual = reverseString("Let's see if this sentence is reversed correctly")
    let expected = "yltcerroc desrever si ecnetnes siht fi ees s'teL"
    expect(actual).toBe(expected)
})