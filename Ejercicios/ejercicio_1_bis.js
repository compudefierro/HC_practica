function sumarTodosPrimos(numeros) {
  function esPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  let sumaArregloPrimos = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (esPrimo(numeros[i])) {
      sumaArregloPrimos += numeros[i];
    }
  }
  return sumaArregloPrimos;
}
resultado = sumarTodosPrimos([1, 5, 2, 9, 3, 4, 11]);
// debe retornar 21
console.log("🚀 ~ file: ejercicio_1.js:22 ~ sumarTodosPrimos:", resultado);

/* La función `Math.sqrt(numero)` se utiliza en este código para determinar el límite superior del bucle `for` en la función `esPrimo(numero)`. 
  
  En general, cuando se busca determinar si un número es primo, no es necesario comprobar si es divisible por todos los números desde 2 hasta el número en cuestión. En lugar de eso, se puede reducir el rango de búsqueda hasta la raíz cuadrada del número.
  
  La razón detrás de esto es que, si un número no es primo, debe tener al menos dos factores distintos que sean menores o iguales a su raíz cuadrada. Si ambos factores fueran mayores que la raíz cuadrada, su multiplicación sería mayor que el número en sí. Por lo tanto, si no se encuentran factores en el rango de 2 a la raíz cuadrada, no existirán factores en el rango de la raíz cuadrada al número en sí.
  
  Usar `Math.sqrt(numero)` en el bucle `for` permite iterar solo hasta la raíz cuadrada del número en lugar de hasta el propio número, lo que mejora el rendimiento del algoritmo al reducir el número de iteraciones necesarias.*/
