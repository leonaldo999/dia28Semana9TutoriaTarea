// Seleccionar elementos del DOM usando IDs
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keys button'); // Selecciona todos los botones

// Variables para almacenar la operación
let currentInput = '';
let operator = '';
let firstOperand = null;

// Función para actualizar la pantalla
function updateDisplay(value, isResult = false) {
  display.value = value;
  if (isResult) {
    display.classList.add('result'); // Agrega clase para color rojo
  } else {
    display.classList.remove('result'); // Quita clase para color normal
  }
}

// Función para manejar los clics en los botones
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {

      // Si se presiona un número, se agrega a la entrada actual
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === 'C') {

      // Si se presiona 'C', se reinicia la calculadora
      currentInput = '';
      operator = '';
      firstOperand = null;
      updateDisplay('');
    } else if (value === '=') {
      
      // Si se presiona '=', se realiza el cálculo
      if (firstOperand !== null && operator) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        updateDisplay(result, true); // Muestra el resultado en rojo
        currentInput = ''; // Reinicia la entrada actual
        firstOperand = result; // Almacena el resultado para continuar operaciones
        operator = ''; // Reinicia el operador
      }
    } else {
      // Si se presiona un operador
      if (currentInput) {
        if (firstOperand === null) {
          // Si no hay primer operando, se almacena el primer número
          firstOperand = parseFloat(currentInput);
        } else {
          // Si ya hay un primer operando, se calcula el resultado antes de cambiar el operador
          const result = calculate(firstOperand, parseFloat(currentInput), operator);
          updateDisplay(result, true); // Muestra el resultado en rojo
          firstOperand = result; // Almacena el resultado para continuar operaciones
        }
        operator = value; // Almacena el operador
        currentInput = ''; // Reinicia la entrada actual
      }
    }
  });
});

// Función para realizar el cálculo
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
        return first; // Retorna el primer operando si hay un error
      }
      return first / second;
    default:
      return second;
  }
}