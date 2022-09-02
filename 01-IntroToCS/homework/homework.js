'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // num ="1010" split() --> [1,0,1,0] reverse() --> [0,1,0,1]
  // sum 2^posicion * valor
  // para convertir de binario a decimar hacemos la sumatoria del num*2^posicion
  // ** = Math.pow
  // posicion++ = posicion + 1
  num = num.split('').reverse(); // num = ['0','1','0','1']
  let result = 0;
  for (let i = 0; i < num.length; i++){
    result = result + (Math.pow(2, i) * parseInt (num [i])) //2^0*0
  }
  return result
}

function DecimalABinario(num) {
  // tu codigo aca
  //34
  //34/2 17 0
  //17/2 8  1
  //8/2  4  0
  //4/2  2  0
  //2/2  1  0
  //1/2     1
  //100010
  let resultado = []
  while (num > 0){
   resultado.unshift(num%2);
   num = Math.floor(num/2);
  }
  return resultado.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}