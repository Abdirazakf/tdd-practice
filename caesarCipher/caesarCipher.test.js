const caesarCipher = require('./caesarCipher')

test('Module Found', () => {
    expect(caesarCipher).toBeDefined
})

test('returns string', () => {
    expect(caesarCipher('',3)).toBe('')
})

describe('Function Output Tests', () => {
    test('characters shift', () => {
        expect(caesarCipher('abc',1)).toBe('bcd')
    })

    test('character wrapping', () => {
        expect(caesarCipher('xyz',3)).toBe('abc')
        expect(caesarCipher('yyyzzz',2)).toBe('aaabbb')
    })

    test('case preservation', () => {
        expect(caesarCipher('HeLLo',3)).toBe('KhOOr')
    })

    test('punctuation should remain unchanged', () => {
        expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
    })
})
describe('Edge Cases', () => {
  test('handles shift of 0', () => {
    expect(caesarCipher('hello', 0)).toBe('hello')
  })
  
  test('handles shift of 26 (full rotation)', () => {
    expect(caesarCipher('abc', 26)).toBe('abc')
  })
  
  test('handles large positive shifts', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd')
    expect(caesarCipher('xyz', 29)).toBe('abc')
  })
  
  test('handles negative shifts', () => {
    expect(caesarCipher('def', -3)).toBe('abc')
    expect(caesarCipher('abc', -1)).toBe('`ab')
  })
  
  test('handles undefined/null shift', () => {
    expect(caesarCipher('hello', undefined)).toBe('hello')
    expect(caesarCipher('hello', null)).toBe('hello')
  })
})

describe('String Type Tests', () => {
  test('preserves numbers', () => {
    expect(caesarCipher('abc123xyz', 3)).toBe('def123abc')
  })
  
  test('handles strings with only spaces', () => {
    expect(caesarCipher('   ', 5)).toBe('   ')
  })
  
  test('handles strings with multiple consecutive spaces', () => {
    expect(caesarCipher('hello  world', 1)).toBe('ifmmp  xpsme')
  })
  
  test('handles strings with only punctuation', () => {
    expect(caesarCipher('!@#$%^&*()', 10)).toBe('!@#$%^&*()')
  })
  
  test('handles mixed punctuation and letters', () => {
    expect(caesarCipher('a!b@c#d$', 1)).toBe('b!c@d#e$')
  })
  
  test('handles newlines and tabs', () => {
    expect(caesarCipher('hello\nworld\t!', 1)).toBe('ifmmp\nxpsme\t!')
  })
})

describe('Uppercase Handling', () => {
  test('uppercase letter wrapping', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC')
  })
  
  test('mixed case with wrapping', () => {
    expect(caesarCipher('xYz', 3)).toBe('aBc')
  })
  
  test('preserves case for single uppercase letters', () => {
    expect(caesarCipher('A', 1)).toBe('B')
    expect(caesarCipher('Z', 1)).toBe('A')
  })
})

describe('Input Validation', () => {
  test('handles null input', () => {
    expect(caesarCipher(null, 3)).toBe('')
  })
  
  test('handles undefined input', () => {
    expect(caesarCipher(undefined, 3)).toBe('')
  })
  
  test('handles number as string input', () => {
    expect(caesarCipher(123, 3)).toBe('')
  })
  
  test('handles boolean as input', () => {
    expect(caesarCipher(true, 3)).toBe('')
  })
})

describe('Performance Tests', () => {
  test('handles very long strings', () => {
    const longString = 'a'.repeat(1000)
    const expected = 'b'.repeat(1000)
    expect(caesarCipher(longString, 1)).toBe(expected)
  })
  
  test('handles empty string with various shifts', () => {
    expect(caesarCipher('', 0)).toBe('')
    expect(caesarCipher('', 100)).toBe('')
    expect(caesarCipher('', -50)).toBe('')
  })
})

describe('Unicode and Special Characters', () => {
  test('handles unicode characters', () => {
    expect(caesarCipher('café', 1)).toBe('dbgé')
  })
})

describe('Boundary Testing', () => {
  test('shifts at letter boundaries', () => {
    expect(caesarCipher('z', 1)).toBe('a')
    expect(caesarCipher('a', -1)).toBe('`')
    expect(caesarCipher('Z', 1)).toBe('A')
    expect(caesarCipher('A', -1)).toBe('@')
  })
  
  test('multiple wrapping', () => {
    expect(caesarCipher('z', 27)).toBe('a')
    expect(caesarCipher('z', 53)).toBe('a')
  })
})