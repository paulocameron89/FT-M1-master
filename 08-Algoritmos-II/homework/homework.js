'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  // divide el array en dos con un pivote aleatorio
  // obtener el pivote
  const left = [], 
    right = [], 
    pivot = array.shift ();
  // recorrer el array, comparar menores, mayores o iguales
  for (let item of array){
    pivot > item ? left.push (item) : right.push (item); //esto pregunta si pivot es mas grande que el item devuelve left del item sino (:) devuelve el right del item
  }
  // recursión
  // unir y devolver
  return [...quickSort(left), pivot, ...quickSort(right)]  
  // otra forma es return quickSort(left).concat(pivot).concat(quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  // dividimos el array a la mitad
  const i = Math.floor (array.length / 2);
  let left = array.slice (0, i);
  let right = array.slice (i, array.length);
  
  
  // recursion
  left = mergeSort (left);
  right = mergeSort (right);
  const result = [];

  // con el resultado, recorre, comparo y lo agrego a un nuevo array
  while (left.length && right.length){
    if (left[0] > right [0]){
      result.push(right.shift());
    } else {
       result.push (left.shift());
      }
  }
  return [...result, ...left, ...right]
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
