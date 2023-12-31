
let pers;
const CON_BEBIDA = 1500;
const CON_DJ = 1000;
const CON_TORTA = 1000;
const MENU1 = 2500;
const MENU2 = 3000;
const MENU3 = 3500;
let nombre;  
let totalPerCapi = 0;
let total = 0;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class Producto {
    constructor(articulo, precio) {
        this.articulo = articulo,
        this.precio = precio
    }
}
class Cliente {
    constructor(nombre, edad, email) {
        this.nombre = nombre,
        this.edad = edad,
        this.email = email
    }
}


function calcularEvento() {
    let nombreIngresado = document.getElementById("nombre").value;
    let emailIngresado = document.getElementById("email").value;
    let tipoEvento = document.getElementById("tipoEvento").value;
    let personas = document.getElementById("personas").value;
    let menuElegido = document.getElementById("menu").value;
    let conBebida = document.getElementById("conBebida").value;
    let conMusica = document.getElementById("conMusica").value;
    let conTorta = document.getElementById("conTorta").value;

    switch (menuElegido) {
        case "pasta":
            totalPerCapi += MENU1;
            break;
        case "pescado":
            totalPerCapi += MENU2;
            break;
        case "asado":
            totalPerCapi += MENU3;
            break;
        default:
            return;
    }

    if (conBebida === "si") {
        totalPerCapi += CON_BEBIDA;
    }

    if (conMusica === "si") {
        totalPerCapi += CON_DJ;
    }

    if (conTorta === "si") {
        totalPerCapi += CON_TORTA;
    }

    total = totalPerCapi * personas;

    let resultadoEvento = document.getElementById("resultadoEvento");
    resultadoEvento.innerHTML = `
        <p>Evento: ${tipoEvento}</p>
        <p>Personas: ${personas}</p>
        <p>Menú: ${menuElegido}</p>
        <p>Con bebida: ${conBebida}</p>
        <p>Con música: ${conMusica}</p>
        <p>Con torta: ${conTorta}</p>
        <p>Total por invitado: $${totalPerCapi}</p>
        <p>Total: $${total}</p>`;

    const evento = new Producto(`tu ${tipoEvento}`, total);
    agregarAlCarrito(evento);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("listaCarrito");
    let totalCarritoElemento = document.getElementById("totalCarrito");

    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.articulo} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });

    totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);

    totalCarritoElemento.textContent = totalCarrito;


    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const GACEBOS = new Producto("Gacebos", 15000);
const BARRA_COCTEL = new Producto("Barra De Tragos", 20000);

const PRODUCTOS = [GACEBOS, BARRA_COCTEL];

let contenedorProductos = document.getElementById("contenedorProductos");

PRODUCTOS.forEach(producto => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <p>Artículo: ${producto.articulo}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${JSON.stringify(producto)})">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(div);
});

actualizarCarrito();


function eliminarDelCarrito(index) {
    carrito.splice(index, 1); 
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("listaCarrito");
    let totalCarritoElemento = document.getElementById("totalCarrito");

    listaCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${producto.articulo} - $${producto.precio}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
    });

    totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);
    totalCarritoElemento.textContent = totalCarrito;

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", obtenerClima);

function obtenerClima() {

    const apiKey = '693c9fa780e34e1aaee37c85634b5b09';
    const ciudad = 'buenos aires';
    const idioma = 'es';

    const apiUrl = `http://api.weatherbit.io/v2.0/current?city=${ciudad}&lang=${idioma}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Actualiza elementos en la página con la información del clima
            document.getElementById('temperatura').textContent = `Temperatura: ${data.data[0].temp}°C`;
            document.getElementById('descripcion').textContent = `Descripción: ${data.data[0].weather.description}`;
        })
        .catch(error => console.error('Error al obtener el clima:', error));
}