const { validar } = require('./index');

// true

test('rut 123456785 devuelve true', () => {
  expect(validar(123456785)).toBe(true);
});

test('rut "123456785" devuelve true', () => {
  expect(validar("123456785")).toBe(true);
});

test('rut "12345678-5" devuelve true', () => {
  expect(validar("12345678-5")).toBe(true);
});

test('rut "12.345.678-5" devuelve true', () => {
  expect(validar("12.345.678-5")).toBe(true);
});

// false

test('rut 123456789 devuelve false', () => {
  expect(validar(123456789)).toBe(false);
});

test('rut "123456789" devuelve false', () => {
  expect(validar("123456789")).toBe(false);
});

test('rut "12345678-9" devuelve false', () => {
  expect(validar("12345678-9")).toBe(false);
});

test('rut "12.345.678-9" devuelve false', () => {
  expect(validar("12.345.678-9")).toBe(false);
});