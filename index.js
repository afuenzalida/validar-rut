/* 
Andrés Fuenzalida - 2019
https://github.com/a-fuenzalida
*/

exports.validar = (valor) => {
  const secuencia = [2, 3, 4, 5, 6, 7];
  if (typeof valor === 'string' || typeof valor === 'number') {
    let rutCompleto = (typeof valor === 'number' ? valor.toString() : valor).split("").filter(v => v !== '.' && v !== '-');
    let rut = rutCompleto.slice(0, -1).reverse();
    let dv = rutCompleto.pop()
    let acum = 0;
    for (let i = 0, j = 0; i < rut.length; i++, j++) {
      j < secuencia.length ? j : j = 0;
      acum += rut[i]*secuencia[j];
    }
    if (11-(acum%11) == (dv == 'K' ? 10 : dv)) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}