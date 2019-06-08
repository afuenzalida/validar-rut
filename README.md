# Validar RUT

Librería de Javascript para validar el RUT chileno utilizando módulo 11.

## Instrucciones

Instala el paquete en tu proyecto:
```
npm install validar-rut
```
Importa la librería y utiliza su método de validación:
```javascript
const rut = require('validar-rut')

// Considerando el siguiente RUT válido como ejemplo: 12.345.678-5
console.log(rut.validar(123456785));
```
La función retornará **true** o **false**.

### Limitaciones

+ El RUT debe ser ingresado en formato númerico o texto.
+ El RUT debe estar sin puntos ni guión.
