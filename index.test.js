const {
  validateRUT,
  getCheckDigit,
  generateRandomRUT,
} = require('./index')

// validateRUT

test('validateRUT returns true on value 123456785', () => {
  expect(validateRUT(123456785)).toBe(true)
})

test('validateRUT returns true on value "123456785"', () => {
  expect(validateRUT("123456785")).toBe(true)
})

test('validateRUT returns true on value "12345678-5"', () => {
  expect(validateRUT("12345678-5")).toBe(true)
})

test('validateRUT returns true on value "12.345.678-5"', () => {
  expect(validateRUT("12.345.678-5")).toBe(true)
})

test('validateRUT returns true on value "15512458-k"', () => {
  expect(validateRUT("15512458-k")).toBe(true)
})

test('validateRUT returns true on value "15.512.458-K"', () => {
  expect(validateRUT("15.512.458-K")).toBe(true)
})

test('validateRUT returns false on value 123456789', () => {
  expect(validateRUT(123456789)).toBe(false)
})

test('validateRUT returns false on value "123456789"', () => {
  expect(validateRUT("123456789")).toBe(false)
})

test('validateRUT returns false on value "12345678-9"', () => {
  expect(validateRUT("12345678-9")).toBe(false)
})

test('validateRUT returns false on value "12.345.678-9"', () => {
  expect(validateRUT("12.345.678-9")).toBe(false)
})

// getCheckDigit

test('getCheckDigit returns "3" on value 23231069', () => {
  expect(getCheckDigit(23231069)).toBe('3')
})

test('getCheckDigit returns "5" on value "12345678"', () => {
  expect(getCheckDigit('12345678')).toBe('5')
})

test('getCheckDigit returns "1" on value "20.102.545"', () => {
  expect(getCheckDigit('20.102.545')).toBe('1')
})

test('getCheckDigit returns "K" on value "19.390.761"', () => {
  expect(getCheckDigit('19.390.761')).toBe('K')
})

// generateRandomRUT

test('generateRandomRUT returns a string type', () => {
  expect(typeof generateRandomRUT(1)).toBe('string')
})

test('generateRandomRUT returns 10 elements', () => {
  expect(generateRandomRUT(10)).toHaveLength(10)
})

test('generateRandomRUT returns an string with dots', () => {
  expect(generateRandomRUT(1, true)).toContain('.')
})

test('generateRandomRUT returns an string with dots', () => {
  expect(generateRandomRUT(1, true)).toContain('.')
})

test('generateRandomRUT returns an string with hyphen', () => {
  expect(generateRandomRUT(1, false, true)).toContain('-')
})
