"use strict";

/* 
Andrés Fuenzalida - 2019
https://github.com/a-fuenzalida
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

const calcularDv = rut => {
  let suma = 0;
  let rutReversa = limpiarRUT(rut).split('').reverse();

  for (let i = 0, j = 2; i < rutReversa.length; i++, j < 7 ? j++ : j = 2) {
    suma += rutReversa[i] * j;
  }

  let resultado = 11 - (suma % 11)
  if (resultado === 11) return '0';
  if (resultado === 10) return 'k';
  return String(resultado);
};

const limpiarRUT = rut => {
  return String(rut).replace(/[^0-9a-z]/gi, '');
}

module.exports = {
  validarRUT,
  calcularDv
};