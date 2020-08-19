const { validarRUT, calcularDv } = require('./index');

// validarRUT

test('rut 123456785 devuelve true', () => {
  expect(validarRUT(123456785)).toBe(true);
});

test('rut "123456785" devuelve true', () => {
  expect(validarRUT("123456785")).toBe(true);
});

test('rut "12345678-5" devuelve true', () => {
  expect(validarRUT("12345678-5")).toBe(true);
});

test('rut "12.345.678-5" devuelve true', () => {
  expect(validarRUT("12.345.678-5")).toBe(true);
});

test('rut "15512458-k" devuelve true', () => {
  expect(validarRUT("15512458-k")).toBe(true);
});

test('rut "15.512.458-K" devuelve true', () => {
  expect(validarRUT("15.512.458-K")).toBe(true);
});

test('rut 123456789 devuelve false', () => {
  expect(validarRUT(123456789)).toBe(false);
});

test('rut "123456789" devuelve false', () => {
  expect(validarRUT("123456789")).toBe(false);
});

test('rut "12345678-9" devuelve false', () => {
  expect(validarRUT("12345678-9")).toBe(false);
});

test('rut "12.345.678-9" devuelve false', () => {
  expect(validarRUT("12.345.678-9")).toBe(false);
});

// calcularDv

test('rut 23231069 devuelve "3"', () => {
  expect(calcularDv(23231069)).toBe('3');
});

test('rut "12345678" devuelve "5"', () => {
  expect(calcularDv('12345678')).toBe('5');
});

test('rut "20.102.545" devuelve "1"', () => {
  expect(calcularDv('20.102.545')).toBe('1');
});

test('rut "19.390.761" devuelve "k"', () => {
  expect(calcularDv('19.390.761')).toBe('k');
});