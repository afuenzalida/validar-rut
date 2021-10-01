"use strict"

/* 
Andrés Fuenzalida - 2021
https://github.com/afuenzalida
*/

/**
 * @param {(string|number)} rut
 * @returns {boolean}
 */
function validateRUT(rut) {
  if (typeof rut !== 'string' && typeof rut !== 'number') {
    console.log(typeof rut)
    throw new TypeError('Input parameter must be of type string or integer')
  }

  const cleanRUT = typeof rut === 'string' ? clearRUT(rut) : String(rut)
  const checkDigit = [...cleanRUT].slice(-1)[0]
  const withoutCheckDigitRUT = cleanRUT.slice(0, -1)
  const obtainedCheckDigit = getCheckDigit(withoutCheckDigitRUT)

  return checkDigit.toLowerCase() === obtainedCheckDigit.toLowerCase()
}

/**
 * @param {(string|number)} rut 
 * @returns {string}
 */
 function getCheckDigit(rut) {
  const cleanRUT = clearRUT(rut)
  const reversedRUT = [...String(cleanRUT)].map(v => parseInt(v)).reverse()
  let result = 0

  for (let i = 0, j = 2; i < reversedRUT.length; i++, j < 7 ? j++ : j = 2) {
    result += reversedRUT[i] * j;
  }

  return (11 - (result % 11)) <= 9 ? String((11 - (result % 11))) : 'K'
}

/**
 * @param {string} rut 
 * @returns {string}
 */
function clearRUT(rut) {
  return String(rut).replace(/[^0-9a-z]/gi, '');
}

/**
 * @param {number} amount 
 * @param {boolean} dots
 * @param {boolean} hyphen
 * @returns {Array<string>}
 */
function generateRandomRUT(amount = 1, dots = false, hyphen = false) {
  const generatedRUTs = [...Array(amount).keys()].map(() => {
    const rut = Math.floor(1000000 + Math.random() * 30000000)
    return `${dots ? rut.toLocaleString() : rut}${hyphen ? '-' : ''}${getCheckDigit(rut)}`
  })

  return amount === 1 ? generatedRUTs[0] : generatedRUTs
}

/**
 * @deprecated since 3.0.0
 */
const validarRUT = (rut) => {
  if (typeof rut === 'string' || typeof rut === 'number') {
    const rutSinFormato = limpiarRUT(rut);
    const rutSinDv = rutSinFormato.slice(0, -1);
    const rutDv = rutSinFormato.split('').pop().toLowerCase();

    return calcularDv(rutSinDv) === rutDv;
  }
  else {
    return false;
  }
};

/**
 * @deprecated since 3.0.0
 */
const calcularDv = rut => {
  let suma = 0;
  let rutReversa = limpiarRUT(rut).split('').reverse();
  console.log(rutReversa)

  for (let i = 0, j = 2; i < rutReversa.length; i++, j < 7 ? j++ : j = 2) {
    suma += rutReversa[i] * j;
  }

  let resultado = 11 - (suma % 11)
  if (resultado === 11) return '0';
  if (resultado === 10) return 'k';
  return String(resultado);
};

/**
 * @deprecated since 3.0.0
 */
const limpiarRUT = rut => {
  return String(rut).replace(/[^0-9a-z]/gi, '');
}

module.exports = {
  clearRUT,
  generateRandomRUT,
  getCheckDigit,
  validateRUT,
  validarRUT,
  calcularDv,
}
