
let ganaste = 1;
let perdiste = 1;

// juego();

function juego() {


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
    valorTolerancia = ['Ω ±10%', 'Ω ±5%'];

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



// Se crea un array que almace todas las variables respuestas para luego desordenarlas y tulizarlas para imprimir en pantalla.
let respuesta = [respuesta1,respuesta2,respuesta3,respuesta4];
// Se desordena el array respuestas para crear un orden de respuestas aleatorias al imprimirlas y así evitar que la respuesta correcta este siempre en la misma posicion.
respuesta = respuesta.sort(function() {return Math.random() - 0.5});


// Un for para escribir el resultado en pantalla para la opciones que debe elegir el usuario.
for (var i = 0; i <= 3; i++) {
  // Asignamos en el valor de las respuestas en el interno de los "inputs" que va a seleccionar el usuario para luego compararlos y saber la respuesta correcta.
  $('#valor'+(i+1)).val(respuesta[i]);
  console.log(document.getElementById('valor'+(i+1)).value);
  // console.log($('#valor'+(i+1)).val(respuesta[i]));
  // Se utiliza jquery para escribir en pantalla con divs los valores de las respuestas, y se utiliza .slice para quitar el ultimo digito ya que este representa la tolerancia en el ejemplo "120001" el resultado seria "12000".
  // Luego de esto se concadena el resultado del array "valorTolerancia" con el indice resultado del ultimo digito de "respuesta#" en el ejemplo "120001" el resultado es "1" y este se pasa como indice al array "valorTolerancia".
  // Aqui utilizamos la variable "i" del for para muchas cosas, la primera es para indicarle que debe escribir en todos los ids "texto#", utilizo el "i+1" debido a que no tengo ningun id en el html de valor que comience por 0.
  // Luego utilizamos nuevamente la variable "i" para acceder al inidice del array "respuesta".
  $('#texto'+(i+1)).html(respuesta[i].slice(0, -1) + valorTolerancia[respuesta[i][respuesta[i].length-1]]);

}

// console.log(respuesta2);
// console.log(respuesta3);
// console.log(respuesta4);
//

// Definimos variables para almacenar la puntiacion del usuario.


// Declamos utilizando jquery que al hacer click en el boton enviar se ejecute la funcion que va a comprobar la respuesta y a comprobar el resultado para asignar la puntuacion.
// Almacenamos en la variable "elegido" el valor de la respuesta del usuario.
  return respuesta1;

}

console.log(juego() + " Respuesta correcta");



$("#enviar").click(function(){

  let elegido = $('input:radio[name=respuesta]:checked').val();
  console.log(elegido + " Esto eleigio");
  // Si el usuario no ha seleccionado ninguna respuesta se indica en pantalla que debe hacerlo.
  if (elegido == undefined) {
    $("#selecciona").html("Selecciona una respuesta.");
  }
  // Se comprueba que el valor elegido por el usuario sea igual a la variable que contiene la respuesta correcta para saber si ha ganado, si eligio bien la puntiacion de "ganaste" aumenta en 1.
  else if (elegido == juego()) {
    $("#ganaste").html(ganaste++);
    $("#selecciona").html("");
    console.log("Bien!!!!!!");
  }
  // Se comprueba que el valor elegido por el usuario sea igual a la variable que contiene la respuesta correcta para saber si ha ganado, si eligio mal la puntiacion de "perdiste" aumenta en 1.
  else {
    $("#perdiste").html(perdiste++);
    $("#selecciona").html("");
    console.log("Mal!!!!!!!");
  }

})
