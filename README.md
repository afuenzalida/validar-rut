# Validar RUT

Librería con herramientas para el RUT chileno.

Incluye:
* Validación de RUT
* Limpieza de carácteres no alfanuméricos del RUT.
* Obtención de dígito verificador.
* Generador de RUTS aleatorios.

## ¿Cómo comenzar?

#### 1. Instala la librería en tu proyecto
```
npm i validar-rut
```

#### 2. Importa la librería

ES6:
```javascript
import { validateRUT, getCheckDigit, generateRandomRUT } from 'validar-rut'
```

CommonJS:
```javascript
const { validateRUT, getCheckDigit, generateRandomRUT } = require('validar-rut')
```

## Funciones
Lista de funciones disponibles
Función | Descripción
--------------------------------------- | --------------------------------------
**validateRUT(rut: string\|number)** | Valida el RUT ingresado. Retorna `true` o `false` dependiendo del resultado.
**getCheckDigit(rut: string\|number)** | Retorna el dígito verificador del RUT ingresado.
**clearRUT(rut: string)** | Limpia todos los caracteres no-alfanuméricos del RUT y lo retorna.
**generateRandomRUT(amount: int, dots: boolean, hyphen: boolean)** | Obtiene uno o una lista (según el valor de `amount`) de RUTS válidos generados aleatoriamente. Se puede configurar el resultado (opciones en `false` por defecto): <br/><br/>`dots`: Si quieres que incluya puntos puntos<br/>`hyphen`: Si quieres que incluya un guión antes del dígito verificador.

## Cambios

+ **1.1.0**: Ahora el RUT también puede ser ingresado con puntos y guión.
+ **2.0.0**: Se agregó función para calcular el digito verificador.
+ **3.0.0**: Se agregaron versiones optimizadas de las funciones existentes con nombres en inglés. Se agregó la función `generateRandomRUT()` para obtener uno o más RUT aleatorios. (Las funciones con nombre en español siguen estando disponibles, pero están deprecadas)
