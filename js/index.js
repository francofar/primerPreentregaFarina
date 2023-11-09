let pers;
const CON_BEBIDA = 1500;
const CON_DJ = 1000;
const CON_TORTA = 1000;
const MENU1 = 2500;
const MENU2 = 3000;
const MENU3 = 3500;
let nomnbre;
let totalPerCapi = 0;

nombre = prompt("Bienvenido aqui va a poder diseñar su evento, ingrese su nombre");
let evento = prompt("ingrese que tipo de evento va a realizar");
pers = parseInt(prompt("cuantas personas asistiran al " + evento + "?"));

let platoElegido = prompt("elija su menu: pasta, pescado, asado").toLowerCase();
switch(platoElegido){
    case platoElegido = "pasta":
        totalPerCapi = totalPerCapi + MENU1
        alert("elegiste el menu pasta")
        break;
    case platoElegido = "pescado":
        totalPerCapi = totalPerCapi + MENU2
        alert("elegiste el menu pescado, muy buena eleccion");
        break;
    case platoElegido = "asado":
        totalPerCapi = totalPerCapi + MENU3
        alert("felicidades elegiste el menu asado")
    default:

}

let conSinBebida = prompt("desea el menu con bebida incluida. si/no").toLowerCase();
switch (conSinBebida){
    case (conSinBebida = "si"):
        totalPerCapi = totalPerCapi + CON_BEBIDA
        alert("exelente nos encargamos de la bebida")
        break;
    case (conSinBebida = "no"):
        alert("perfecto usted se encarga de la bebida")
        break;
    default:
        alert("ingrese un dato valido");
}

let conMusica = prompt("desea contratar DJ. si/no").toLowerCase();
switch(conMusica){
    case (conMusica = "si"):
        totalPerCapi = totalPerCapi + CON_DJ
        alert("la pista de baile es nuestra")
        break;
    case (conMusica = "no"):
        alert("usted se encarga de la musica")
        break;
    default:
        alert("ingrese un dato valido")
}
let conTorta = prompt("desea incluir la torta. si/no").toLowerCase();
switch(conTorta){
    case (conMusica = "si"):
        totalPerCapi = totalPerCapi + CON_TORTA
        alert("le prepararemos el mejor pastel")
        break;
    case (conTorta = "no"):
        alert("okey")
        break
    default:
        alert("ingrese un dato valido")
}

function costoTotal(gastoPers, personas){
    valorTotal = gastoPers * personas
    return valorTotal
}

let total = costoTotal ( totalPerCapi, pers)
alert(" su " + evento + " para " + pers + " personas " + "tiene un valor aproximado de " + totalPerCapi + " por invitado, con un valor total de $ " + total + " muchas gracias " + nombre)

function descuentoEfectivo (precioTotal, descuento){
    let desc = (precioTotal * descuento)/100
    let totalConDesc = precioTotal - desc
    return totalConDesc
}

let pagoEnEfectivo = descuentoEfectivo (total,15)
alert("realizando el pago en efectivo tiene un 15% de descuento, siendo asi el valor total: $ " + pagoEnEfectivo)
