
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

//1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
//2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
//3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

var a = 1; // declarandola por primera vez
b = 2; // contexto global

function probar(){ // contexto A
   console.log (a); // entro con el valor del contexto global
   a = 3; // se cambia el valor que esta en el contexto global
   var a = 10; // Contexto A
   console.log (a);
}

```javascript

// Parte 1 Lectura y Memoria
var x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) 
// Parte 2 Asignación
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar); // Parte 2 Asignación
console.log(baz); // Parte 2 Asignación
foo(); 
function foo() { console.log('Hola!'); }
var bar = 1; // Parte 1 Lectura y Memoria
baz = 2; // Parte 1 Lectura y Memoria
```

```javascript
var instructor = "Tony"; // Parte 1 Lectura y Memoria (crea instructor = undefined) Parte 2 Asignación

if(true) { 
    var instructor = "Franco"; 
}
console.log(instructor);
```

```javascript
var instructor = "Tony"; //crea instructor
console.log(instructor); // me retorna Tony
(function() { 
   if(true) {
      var instructor = "Franco"; //declara variable local instructor 
      console.log(instructor); // me retorna franco
   }
})();
console.log(instructor); // al cerrar la función vuelve a la variable global Tony
```

```javascript
var instructor = "Tony"; // crea instructor
let pm = "Franco"; // crea pm
if (true) { 
    var instructor = "The Flash"; // Existia Tony y ahora lo pisa y lo convierte en The Flash
    let pm = "Reverse Flash"; // Pisaria Franco y lo convierte en Reverse Flash
    console.log(instructor); // devuelve The Flash
    console.log(pm); // devuelve Reverse Flash
}
console.log(instructor); // Devuelve The Flash
console.log(pm); // Devuelve Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // devuelve 2 (coherción de datos selectiva)
"2" * "3" // devuelve 6
4 + 5 + "px" // primero suma y luego concatena 9px
"$" + 4 + 5 // primero toma el string $ y luego concatena 45 ---> $45
"4" - 2 // resta
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // no existe llaves, da un array que devuelve undefined
parseInt("09") //devuelve 9
5 && 2 // devuelve el último ---> 2
2 && 5 // devuelve el último ---> 5
5 || 0 //  devuelve numero > a 0 ---> 5
0 || 5 // devuelve numero > a 0 ---> 5
[3]+[3]-[10] // concatena los + (33) y luego resta 10 (23)
3>2>1 // 3>2 es 1 (1 es true) y 1 > 1 es false ---> false
[] == ![] // true, al tener dos iguales los toman a los dos como valores booleanos iguales
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // me retorna 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; // friskies
    }
    return snack; //undefined porque getFood era false, si fuera true me da valor
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname; // function (){
   //return this.fullname}
}

console.log(test()); // me retorna Juan Perez porque busca en el contexto global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
// cada console.log me da su respectivo número (1,2,3,4)
// según el orden me da (1, 4) ya que setTimeout pone en cola todo lo demas y JS resuelve todo lo inmediato primero para luego abarcar la cola según el tiempo de proceso --> primero el 0 miliseg y luego el 1000 miliseg ---> (1,4,3,2)
printing(); // (1,4,3,2)
```
