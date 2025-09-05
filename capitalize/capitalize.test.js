const capitalize = require('./capitalize')

test('Module Found', () => {
    expect(capitalize).toBeDefined
})

test('Single Letter', () => {
    expect(capitalize('a')).toBe('A')
})

test('Only first char capitalized', () => {
    expect(capitalize('hello world')).toBe('Hello world')
})