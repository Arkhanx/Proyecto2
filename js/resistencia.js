

function valores(ceros) {
  function aleatorio(a,b){return Math.round(Math.random()*(b-a)+parseInt(a))}
  var valor1 = aleatorio(1, 9);
  var valor2 = aleatorio(0, 9);
  var temporal = aleatorio(0, 9);
  if (ceros) {
    var ceros = "0";
    function hola (){for(i = 0; i < temporal; i++){ceros += "0";} return ceros;}
    var valor3 = hola();
  }
  else {
    var valor3 = temporal;
  }
  var valor4 = aleatorio(0, 1);
  return valor1.toString()+valor2.toString()+valor3+valor4.toString();
}

var colores = ['negro', 'cafe', 'rojo', 'naranja', 'amarillo', 'verde', 'morado', 'violeta', 'gris', 'blanco'];
var tolerancia = ['plata', 'oro'];

var respuesta1 = valores(1);
var respuesta2 = valores(1);
var respuesta3 = valores(1);
var respuesta4 = valores(1);

$("#color1").attr("class", colores[respuesta1[0]]);
$("#color2").attr("class", colores[respuesta1[1]]);
$("#color3").attr("class", colores[respuesta1[2]]);
$("#color4").attr("class", tolerancia[respuesta1[3]]);

console.log(respuesta1);
console.log(respuesta2);
console.log(respuesta3);
console.log(respuesta4);

// var valor3 = function(){for(i = 0; i < aleatorio(0, 9); i++){valor3 += "0";}}


// var respuesta1_valor2 = aleatorio(1,9);
// var respuesta1_valor3 = aleatorio(1,9);
// var respuesta1_valor4 = aleatorio(1,2);
//
//
// function ceros(respuesta){
//
//   var ceros2 = "";
//
//   for(i = 0; i < respuesta; i++){ceros2 += "0";}
//
//   return ceros2
// }
//
//
//
// function valores(respuesta, color){
//
//
//   if ( respuesta == 1) {
//     $("#color"+color).attr("class", "cafe");
//   }
//   else if (respuesta == 2) {
//     $("#color"+color).attr("class", "rojo");
//   }
//   else if (respuesta == 3) {
//     $("#color"+color).attr("class", "naranja");
//   }
//   else if (respuesta == 4) {
//     $("#color"+color).attr("class", "amarillo");
//   }
//   else if (respuesta == 5) {
//     $("#color"+color).attr("class", "verde");
//   }
//   else if (respuesta == 6) {
//     $("#color"+color).attr("class", "morado");
//   }
//   else if (respuesta == 7) {
//     $("#color"+color).attr("class", "violeta");
//   }
//   else if (respuesta == 8) {
//     $("#color"+color).attr("class", "gris");
//   }
//   else if (respuesta == 9) {
//     $("#color"+color).attr("class", "blanco");
//   }
//
// }
//
//   if ( respuesta1_valor4 == 1) {
//     $("#color4").attr("class", "oro");
//     porcentaje = " - 5%";
//   }
//   else if (respuesta1_valor4 == 2) {
//     $("#color4").attr("class", "plata");
//     porcentaje = " - 10%";
//   }
//
// valores(respuesta1_valor1, 1);
// valores(respuesta1_valor2, 2);
// valores(respuesta1_valor3, 3);
//
// var respuesta1 = respuesta1_valor1.toString()+respuesta1_valor2.toString()+ceros(respuesta1_valor3)+porcentaje+" Ω";
//
//
// var respuesta2_valor1 = aleatorio(1,9);
// var respuesta2_valor2 = aleatorio(1,9);
// var respuesta2_valor3 = aleatorio(1,9);
// var respuesta2 = respuesta2_valor1.toString()+respuesta2_valor2.toString()+ceros(respuesta2_valor3)+porcentaje+" Ω";
//
//
// var respuesta3_valor1 = aleatorio(1,9);
// var respuesta3_valor2 = aleatorio(1,9);
// var respuesta3_valor3 = aleatorio(1,9);
// var respuesta3 = respuesta3_valor1.toString()+respuesta3_valor2.toString()+ceros(respuesta3_valor3)+porcentaje+" Ω";
//
//
// var respuesta4_valor1 = aleatorio(1,9);
// var respuesta4_valor2 = aleatorio(1,9);
// var respuesta4_valor3 = aleatorio(1,9);
// var respuesta4 = respuesta4_valor1.toString()+respuesta4_valor2.toString()+ceros(respuesta4_valor3)+porcentaje+" Ω";
//

//
//
// var numeros = [0,1,2,3];
// var variantenumero = [];
// variantenumero[0] = "1"
// variantenumero[1] = "2"
// variantenumero[2] = "3"
// variantenumero[3] = "4"
// numeros = numeros.sort(function() {return Math.random()-0.5});
//
// var respuestas = [0,1,2,3];
// var variante = [];
// variante[0] = respuesta1;
// variante[1] = respuesta2;
// variante[2] = respuesta3;
// variante[3] = respuesta4;
// respuestas = respuestas.sort(function() {return Math.random()-0.5});
// for(x = 0; x < respuestas.length; x++){
//   $('#texto'+variantenumero[numeros[x]]).html(variante[respuestas[x]]);
//   $('#valor'+variantenumero[numeros[x]]).val(variante[respuestas[x]]);
// }
//
//
//
// console.log(respuesta1);
//
// var ganaste = 1;
// var perdiste = 1;
//
// $("#enviar").click(function(){
//
// var respuesta = $('input:radio[name=respuesta]:checked').val();
//
//   if (respuesta == undefined){
//     $("#selecciona").html("Selecciona una respuesta.");
//   }
//
//   else{
//
//     $("#selecciona").html("");
//
// if (respuesta1 == respuesta) {
//
//
//   $("#ganaste").html(ganaste++);
//
//
// }
//
//
// else{
//
//   $("#perdiste").html(perdiste++);
// }
//
//
//
// }
//
// })
