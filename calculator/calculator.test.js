const calculator = require('./calculator')

test('Module Found', () => {
    expect(calculator).toBeDefined
})
test('add 2 numbers', () => {
    expect(calculator.add(1,1)).toBe(2)
})

test('add negative numbers', () => {
    expect(calculator.add(-5,5)).toBe(0)
})

test('add decimal numbers', () => {
    expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8)
  })

test('subtract 2 numbers', () => {
    expect(calculator.subtract(30,20)).toBe(10)
})

test('subtract negative numbers', () => {
    expect(calculator.subtract(-10, -5)).toBe(-5)
})
test('subtract from zero', () => {
    expect(calculator.subtract(0, 5)).toBe(-5)
})

test('subtract decimal numbers', () => {
    expect(calculator.subtract(5.7, 2.2)).toBeCloseTo(3.5)
})

test('multiply two positive numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12)
})
  
test('multiply by zero', () => {
  expect(calculator.multiply(5, 0)).toBe(0)
})

test('multiply by one', () => {
  expect(calculator.multiply(7, 1)).toBe(7)
  expect(calculator.multiply(1, 7)).toBe(7)
})

test('multiply negative numbers', () => {
  expect(calculator.multiply(-3, -4)).toBe(12)
})

test('multiply decimal numbers', () => {
  expect(calculator.multiply(2.5, 4)).toBeCloseTo(10)
  expect(calculator.multiply(1.5, 3.2)).toBeCloseTo(4.8)
})
test('divide two positive numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5)
})

test('divide by one', () => {
  expect(calculator.divide(8, 1)).toBe(8)
})

test('divide zero by number', () => {
  expect(calculator.divide(0, 5)).toBe(0)
})

test('divide zero by zero returns NaN', () => {
  expect(calculator.divide(0, 0)).toBe(NaN)
})

test('divide negative numbers', () => {
  expect(calculator.divide(-10, 2)).toBe(-5)
})

test('divide decimal numbers', () => {
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5)
})
test('divide with remainder', () => {
    expect(calculator.divide(7, 3)).toBeCloseTo(2.333, 3)
})  