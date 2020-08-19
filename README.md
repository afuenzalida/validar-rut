# Validar RUT

Librería con herramientas para el cálculo de digito verificador y validación del RUT chileno.

Puede leer RUT de tipo integer y string. Limpiará todos los caracteres que no sean alfanuméricos.

## Uso

Instala el paquete en tu proyecto:
```
npm install validar-rut
```

#### Función **validarRUT**:

```javascript
const { validarRUT } = require('validar-rut')
```

```javascript
// El RUT devolverá 'true' en los siguientes formatos:
validarRUT(123456785);
validarRUT('123456785');
validarRUT('12345678-5');
validarRUT('12.345.678-5');
```

En caso de que el RUT sea inválido, la función retornará **false**.

#### Función **calcularDv**:

```javascript
const { calcularDv } = require('validar-rut')
```

```javascript
// Se devolverá el digito verificador en formato string:
validarRUT(23231069); // -> "3"
validarRUT('12345678'); // -> "5"
validarRUT('20.102.545'); // -> "1"
validarRUT('19.390.761'); // -> "k"
```

## Cambios

+ 1.1.0: Ahora el RUT también puede ser ingresado con puntos y guión.
+ 2.0.0: Se agregó función para calcular el digito verificador.