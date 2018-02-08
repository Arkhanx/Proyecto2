// Esta funcion llamada "valores" crea toda la estructura de los valores de una resistencia, por ejemplo 120001.
// En el ejemplo "120001" el valor final corresponde a la tolelancia.
function valores() {function aleatorio(a,b){return Math.round(Math.random()*(b-a)+parseInt(a))}
  // Definicion de variables separadas por comas y con let para que se queden en el Scope.
  let
  // Primer valor de una resistencia, no puede ser menor a 1 ni mayor a 9.
  valor1 = aleatorio(1, 9),
  // Segundo valor de una resistencia.
  valor2 = aleatorio(0, 9),
  // Variable temporal para almacenar los "ceros" del for que se utiliza más abajo.
  temporal = "",
  // Un for que busca almacenar en la variable "valor3" una cantidad de string "ceros" de cantidad aleatoria.
  valor3 = () => { for (i = 0; i < aleatorio(0, 9); i++) {temporal += "0";} return temporal;},
  // Variable para almacenar valor que va a definir la tolerancia de la resistencia.
  valor4 = aleatorio(0, 1);
  // Retorna los valores de todas las variables como un string completo, todo el valor de la resistencia, en formato de ejemplo "120001".
  return valor1.toString()+valor2.toString()+valor3()+valor4.toString();
}

// Definicion de variables con arrays que almacenan los colores con nombres de variables definidas en el CCS para cambiar los colores de la resistencia.
let colores = ['negro', 'cafe', 'rojo', 'naranja', 'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'],
    // Arrays de colores para la tolerancia de la resistencia.
    tolerancia = ['plata', 'oro'],
    // Valores para imprimir en pantalla junto con los valores en formato de ejemplo "120001 - 10%".
    valorTolerancia = [' - 10%', ' - 5%'];

// Ejecutar funcion "valores" para almacenar en variables valores de resistencia completas aleatorios en formato "120001"
let respuesta1 = valores(),
    respuesta2 = valores(),
    respuesta3 = valores(),
    respuesta4 = valores();

// Se utiliza el $ de jquery para hacer referencia para cambiar la clase del en el CCS del SVG, se le pasa el array "colores" con el indice del valor 1 de la variable respuesta.
// Es decir si la variable respues es "120001" se le pasa a colores el indice del resultado del primer digito de la variable "respuesta#" en el ejemplo "120001" seria así "colores[1]".
$("#color1").attr("class", colores[respuesta1[0]]);
// El mismo proceso con el color 2 de la resistencia se pasa el array "colores" con el indice del segundo digito de "respuesta#".
$("#color2").attr("class", colores[respuesta1[1]]);
// Debido a que la tercera parte de la funcion "valores" es representado en "ceros" lo que hacemos en esta parte es pasar el array "colores" con el indice que del siguiente resultado:
// "respuesta#" quitandole con ".slice(2, -1).length" los dos primeros digitos y el ultimo es decir si el ejemplo es "120001" despues del .slice seria 000 y despues de .length seria 3.
$("#color3").attr("class", colores[respuesta1.slice(2, -1).length]);
// Se pasa el array "tolerancia" con el indice "respuesta#.length-1" lo cual representa el ultimo digito del formato de la funcion "valores", en el ejemplo "120001" seria = 1.
$("#color4").attr("class", tolerancia[respuesta1[respuesta1.length-1]]);


// Se utiliza jquery para escribir en pantalla con divs los valores de las respuestas, y se utiliza .slice para quitar el ultimo digito ya que este representa la tolerancia en el ejemplo "120001" el resultado seria "12000".
// Luego de esto se concadena el resultado del array "valorTolerancia" con el indice resultado del ultimo digito de "respuesta#" en el ejemplo "120001" el resultado es "1" y este se pasa como indice al array "valorTolerancia".

for (var i = 1; i <= 4; i++) {

  let respuesta = ["relleno",respuesta1,respuesta2,respuesta3,respuesta4];
  $('#valor'+i).val(respuesta[i].slice(0, -1) + valorTolerancia[respuesta[i][respuesta[i].length-1]]);
  $('#texto'+i).html(respuesta[i].slice(0, -1) + valorTolerancia[respuesta[i][respuesta[i].length-1]]);

  console.log(respuesta[i] + "Esta es la respuesta");

}

//
// $('#valor1').val(respuesta1.slice(0, -1) + valorTolerancia[respuesta1[respuesta1.length-1]]);
// $('#texto1').html(respuesta1.slice(0, -1) + valorTolerancia[respuesta1[respuesta1.length-1]]);
//
// $('#valor2').val(respuesta2.slice(0, -1) + valorTolerancia[respuesta2[respuesta2.length-1]]);
// $('#texto2').html(respuesta2.slice(0, -1) + valorTolerancia[respuesta2[respuesta2.length-1]]);
//
// $('#valor3').val(respuesta3.slice(0, -1) + valorTolerancia[respuesta3[respuesta3.length-1]]);
// $('#texto3').html(respuesta3.slice(0, -1) + valorTolerancia[respuesta3[respuesta3.length-1]]);
//
// $('#valor4').val(respuesta4.slice(0, -1) + valorTolerancia[respuesta4[respuesta4.length-1]]);
// $('#texto4').html(respuesta4.slice(0, -1) + valorTolerancia[respuesta4[respuesta4.length-1]]);


console.log(respuesta1);
console.log(respuesta2);
console.log(respuesta3);
console.log(respuesta4);
