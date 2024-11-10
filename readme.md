# Calculadora JavaScript

## Tabla de Contenidos

- [Calculadora JavaScript](#calculadora-javascript)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Explicación del Código](#explicación-del-código)
    - [Selección de Elementos del DOM](#selección-de-elementos-del-dom)
    - [Variables para Almacenar la Operación](#variables-para-almacenar-la-operación)
    - [Función para Actualizar la Pantalla](#función-para-actualizar-la-pantalla)
    - [Manejo de Clics en los Botones](#manejo-de-clics-en-los-botones)
    - [Función para Realizar el Cálculo](#función-para-realizar-el-cálculo)
  - [Conclusión](#conclusión)
    - [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Funcionalidades](#funcionalidades)

## Descripción

Este proyecto es una calculadora simple implementada en HTML, CSS y JavaScript. Permite realizar operaciones básicas como suma, resta, multiplicación y división. La interfaz es intuitiva y está diseñada para ser fácil de usar.

[☝️](#calculadora-javascript)

## Instalación

Para utilizar la calculadora, simplemente clona este repositorio y abre el archivo `index.html` en tu navegador web. Asegúrate de tener los archivos `styles.css` y `calculator.js` en la misma carpeta.

```bash
git clone https://github.com/leonaldo999/dia28Semana9TutoriaTarea.git
cd calculadora-js
open index.html
```

[☝️](#calculadora-javascript)

## Uso

1. Haz clic en los botones numéricos para ingresar números.

1. Selecciona un operador (suma, resta, multiplicación o división).

1. Ingresa otro número y presiona `=` para ver el resultado.

1. Puedes presionar `C` para reiniciar la calculadora.

[☝️](#calculadora-javascript)

## Explicación del Código

A continuación, se detalla la lógica de la calculadora implementada en `calculator.js`.

### Selección de Elementos del DOM

```js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keys button');
```

- `display`: Selecciona el elemento `display` del DOM, que es el campo de texto donde se mostrará el resultado.

- `.keys button`: Selecciona todos los botones del DOM, que serán utilizados para ingresar números y operadores.

### Variables para Almacenar la Operación

```js
let currentInput = '';
let operator = '';
let firstOperand = null;
```

- `currentInput`: Almacena el último número ingresado por el usuario.

- `operator`: Almacena el operador seleccionado por el usuario.

- `firstOperand`: Almacena el primer número ingresado por el usuario.

### Función para Actualizar la Pantalla

```js
function updateDisplay(value, isResult = false) {
  display.value = value;
  if (isResult) {
    display.classList.add('result');
  } else {
    display.classList.remove('result');
  }
}
```

- Esta función actualiza el valor mostrado en el campo de entrada.

- `updateDisplay(value, isResult = false)`: Actualiza el valor en la pantalla de la calculadora. Si `isResult` es `true`, agrega la clase `result` al elemento `display` para indicar que el valor es el resultado de una operación.

- `display.value = value;`: Establece el valor del campo de entrada en `value`

- `display.classList.add('result');`: Agrega la clase `result` al elemento `display

- `if (isResult) { ... } else { ... }`: Si `isResult` es `true`, ejecuta el código dentro del bloque `if`, de lo contrario ejecuta el código dentro del bloque `else`  

### Manejo de Clics en los Botones

```js
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = null;
      updateDisplay('');
    } else if (value === '=') {
      if (firstOperand !== null && operator) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        updateDisplay(result, true);
        currentInput = '';
        firstOperand = result;
        operator = '';
      }
    } else {
      if (currentInput) {
        if (firstOperand === null) {
          firstOperand = parseFloat(currentInput);
        } else {
          const result = calculate(firstOperand, parseFloat(currentInput), operator);
          updateDisplay(result, true);
          firstOperand = result;
        }
        operator = value;
        currentInput = '';
      }
    }
  });
});
```

- `button.addEventListener('click', () => { ... });`: Agrega un evento declic a cada botón en la lista `buttons` y ejecuta la función anónima cuando se produce el evento.

- `const value = button.textContent;`: Obtiene el texto contenido en el botón que se ha clicado.

- `if (value >= '0' && value <= '9') { ... }`: Si el valor del botón es un dígito, ejecuta el código dentro del bloque `if`.

- `else if (value === 'C') { ... }`: Si el valor del botón es 'C', ejecuta el código dentro del bloque `else if`.

### Función para Realizar el Cálculo

```js
function calculate(first, second, operator) {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      if (second === 0) {
        alert("Error: División por cero no permitida.");
        return first;
      }
      return first / second;
    default:
      return second;
  }
}
```

- `function calculate(first, second, operator) { ...  }`: Define la función `calculate` que toma tres parámetros: `first`, `second` y `operator`.

- `switch (operator) { ... }`: Utiliza un `switch` para determinar qué operación realizar según el valor del operador.

- `case '+': return first + second;`: Si eloperador es '+', devuelve la suma de `first` y `second`.

- `case '-': return first - second;`: Si el operador es '-', devuelve la resta de `first` y `second`.

- `case '*': return first * second;`: Si el operador es '*', devuelve el producto de `first` y `second`.

- `case '/': if (second === 0) { ... }`: Si eloperador es '/', verifica si `second` es igual a 0. Si es así, muestra un mensaje de error y devuelve `first`. Si no es así, devuelve la división de `first` por `second`.

- `default: return second;`: Si el operador no es ninguno de los anteriores, devuelve `second`.

- `return first;`: Si no se cumple ninguna de las condiciones anteriores, devuelve `first`.

- `return second;`: Si no se cumple ninguna delas condiciones anteriores, devuelve `second`.

- `return first / second;`: Si el operador es '/', devuelve la división de `first

[☝️](#calculadora-javascript)

## Conclusión

Este proyecto es una calculadora simple que demuestra el uso de HTML, CSS y JavaScript para crear una aplicación web interactiva. La calculadora permite a los usuarios realizar operaciones matemáticas básicas como suma, resta, multiplicación y división de manera intuitiva.

### Tecnologías Utilizadas

- **HTML**: Se utilizó para estructurar la interfaz de la calculadora, creando botones y un campo de entrada para mostrar los resultados.
- **CSS**: Se aplicó para estilizar la calculadora, mejorando su apariencia y haciéndola más amigable para el usuario. Se implementaron efectos visuales en los botones para mejorar la experiencia de usuario.
- **JavaScript**: Se utilizó para implementar la lógica de la calculadora, manejando eventos de clic en los botones y realizando cálculos. La manipulación del DOM se utilizó para actualizar la pantalla de la calculadora en respuesta a las acciones del usuario.

### Funcionalidades

- **Interfaz de Usuario Intuitiva**: Los usuarios pueden hacer clic en los botones para ingresar números y operadores.
- **Operaciones Básicas**: La calculadora puede realizar suma, resta, multiplicación y división.
- **Manejo de Errores**: Se incluye un manejo básico de errores, como la prevención de la división por cero, que muestra un mensaje de alerta.
- **Reinicio de la Calculadora**: Los usuarios pueden reiniciar la calculadora presionando el botón `C`.

Este proyecto es un excelente ejemplo de cómo se pueden integrar diversas tecnologías web para crear aplicaciones funcionales y atractivas. A medida que continúes aprendiendo, puedes expandir esta calculadora con más funciones, como operaciones avanzadas o la capacidad de manejar entradas de teclado.

[☝️](#calculadora-javascript)

<!-- 
Esta semana sea a visto temas de control del DOOM y Programación Orientada a Objetos en JavaScript. Con lo que has visto en clase realiza una de las dos tareas:
 
1. Calculadora : Usando lo visto anteriormente vas a hacer que ahora tu calculadora sea funcional (Hay que corregir la duplicación de signos) usando HTML y JS, puedes
   usar un FrameWork si gustas o hacerlo por tu cuenta el CSS.
 
2. ToDo JS : Crear un formulario donde se pueda ingresar información de una persona y por cada una de ellas mostrarlo en una carta/tarjeta/card de forma dinámica, el diseño es libre. Además
Se requiere que las personas se almacenen en un array de objetos y mostrar todo el array en la consola.
 
Para tener un orden, tu proyecto deberá estar en un nuevo repositorio. Además de crear un readme explicando el uso de las propiedades que has utilizado en tu pagina web, como adicional a esto en el propio readme adjuntar captura de pantalla de la pagina.
 -->