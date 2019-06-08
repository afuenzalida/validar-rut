# Validar RUT

Librería de Javascript para validar el RUT chileno utilizando módulo 11.

## Instrucciones

Instala el paquete en tu proyecto:
```
npm install validar-rut
```
Importa la librería y utiliza su método **validar**:
```javascript
const { validar } = require('validar-rut')

// El RUT devolverá 'true' en los siguientes formatos:
validar(123456785);
validar('123456785');
validar('12345678-5');
validar('12.345.678-5');
```
En caso de que el RUT sea inválido, la función retornará **false**.

### Cambios

+ 1.1.0: Ahora el RUT también puede ser ingresado con puntos y guión.