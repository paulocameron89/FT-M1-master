"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

// valor > node va a la derecha
// valor < node va a la izquierda
function BinarySearchTree(value){
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){
  if (this.value === null) return 0;
  if (this.left === null && this.right === null) return 1;
  if (this.left === null && this.right !== null) return 1 + this.right.size ();
  if (this.left !== null && this.right === null) return 1 + this.left.size ();
  if (this.left !== null && this.right !== null) return 1 + this.right.size () + this.left.size ();
}

BinarySearchTree.prototype.insert = function(value){
  // evaluar value
  // mayores a la derecha
  if (value > this.value){
    // si el nodo right esta libre...
    if (this.right === null) this.right = new BinarySearchTree (value);
    else this.right.insert (value);
    }
    //menores a la izquierda
    if (value < this.value){
      // si el nodo left esta libre...
      if (this.left === null) this.left = new BinarySearchTree (value);
      else this.left.insert (value);
    }
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;{

    if (value > this.value){
      if (this.right === null) return false;
      return this.right.contains (value);
    }
   if (value < this.value){
     if (this.left === null) return false;
     return this.left.contains (value);
   }
  } 
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  // post-order
  // izq-> der -> root
  if (order === "post-order"){
    if (this.left !== null) this.left.depthFirstForEach (cb, order);
    if (this.right !== null) this.right.depthFirstForEach (cb, order);
    cb (this.value);
  }

  // pre-order
  // root -> izq -> der
  else if (order === "pre-order"){
    cb (this.value);
    if (this.left !== null) this.left.depthFirstForEach (cb, order);
    if (this.right !== null) this.right.depthFirstForEach (cb, order);
  }

  // in-order
  // izq -> root -> der
  else {
    if (this.left !== null) this.left.depthFirstForEach (cb, order);
    cb (this.value);
    if (this.right !== null) this.right.depthFirstForEach (cb, order);
  }
  
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []){
  // guarda lo que hay en la izq
  if (this.left !== null) queue.push (this.left);
  // guarda lo que hay en la der
  if (this.right !== null) queue.push (this.right);
  //ejecutar root
  cb (this.value);
  //revisar si hay elementos en la cola
  if (queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
