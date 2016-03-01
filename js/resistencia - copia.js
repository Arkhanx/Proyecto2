function aleatorio(a,b){return Math.round(Math.random()*(b-a)+parseInt(a))}

var porcentaje;

var respuesta1_valor1 = aleatorio(1,9);
var respuesta1_valor2 = aleatorio(1,9);
var respuesta1_valor3 = aleatorio(1,9);
var respuesta1_valor4 = aleatorio(1,2);


function ceros(respuesta){

  var ceros2 = "";

  for(i = 0; i < respuesta; i++){ceros2 += "0";}

  return ceros2
}



function valores(respuesta, color){


  if ( respuesta == 1) {
    $( "#color"+color ).addClass("caja__item--1");
  }
  else if (respuesta == 2) {
    $( "#color"+color ).addClass("caja__item--2");
  }
  else if (respuesta == 3) {
    $( "#color"+color ).addClass("caja__item--3");
  }
  else if (respuesta == 4) {
    $( "#color"+color ).addClass("caja__item--4");
  }
  else if (respuesta == 5) {
    $( "#color"+color).addClass("caja__item--5");
  }
  else if (respuesta == 6) {
    $( "#color"+color).addClass("caja__item--6");
  }
  else if (respuesta == 7) {
    $( "#color"+color).addClass("caja__item--7");
  }
  else if (respuesta == 8) {
    $( "#color"+color).addClass("caja__item--8");
  }
  else if (respuesta == 9) {
    $( "#color"+color).addClass("caja__item--9");
  }

}

  if ( respuesta1_valor4 == 1) {
    $( "#color4").addClass("caja__item--oro");
    porcentaje = " +/- 5%";
  }
  else if (respuesta1_valor4 == 2) {
    $( "#color4").addClass("caja__item--plata");
    porcentaje = " +/- 10%";
  }

console.log(porcentaje);


var respuestas = [0,1,2,3];
var variante = [];
variante[0] = '<div class="col-sm-6 respuestas"><div class="cajita"><input id="valor1"  type="radio" name="respuesta" value=""><span id="texto1"></span></div></div>';
variante[1] = '<div class="col-sm-6 respuestas"><div class="cajita"><input id="valor2"  type="radio" name="respuesta" value=""><span id="texto2"></span></div></div>';
variante[2] = '<div class="col-sm-6 respuestas"><div class="cajita"><input id="valor3"  type="radio" name="respuesta" value=""><span id="texto3"></span></div></div>';
variante[3] = '<div class="col-sm-6 respuestas"><div class="cajita"><input id="valor4"  type="radio" name="respuesta" value=""><span id="texto4"></span></div></div>';
respuestas = respuestas.sort(function() {return Math.random()-0.5});
for(x = 0; x < respuestas.length; x++){
  $('#respuestas').append(variante[respuestas[x]]);
}

valores(respuesta1_valor1, 1);
valores(respuesta1_valor2, 2);
valores(respuesta1_valor3, 3);


var respuesta1 = respuesta1_valor1.toString()+respuesta1_valor2.toString()+ceros(respuesta1_valor3)+porcentaje;
$('#valor1').val(respuesta1);
$('#texto1').html(respuesta1);

var respuesta2_valor1 = aleatorio(1,9);
var respuesta2_valor2 = aleatorio(1,9);
var respuesta2_valor3 = aleatorio(1,9);
var respuesta2 = respuesta2_valor1.toString()+respuesta2_valor2.toString()+ceros(respuesta2_valor3);
$('#valor2').val(respuesta2);
$('#texto2').html(respuesta2);

var respuesta3_valor1 = aleatorio(1,9);
var respuesta3_valor2 = aleatorio(1,9);
var respuesta3_valor3 = aleatorio(1,9);
var respuesta3 = respuesta3_valor1.toString()+respuesta3_valor2.toString()+ceros(respuesta3_valor3);
$('#valor3').val(respuesta3);
$('#texto3').html(respuesta3);

var respuesta4_valor1 = aleatorio(1,9);
var respuesta4_valor2 = aleatorio(1,9);
var respuesta4_valor3 = aleatorio(1,9);
var respuesta4 = respuesta4_valor1.toString()+respuesta4_valor2.toString()+ceros(respuesta4_valor3);
$('#valor4').val(respuesta4);
$('#texto4').html(respuesta4);



$("#enviar").click(function(){

  var respuesta = $('input:radio[name=respuesta]:checked').val();

  if (respuesta1 == respuesta) {
    console.log("Bien!!!!!!");
  }
  else {
    console.log("Mal!!!!!!!");
  }
})
