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
const desc = 15;
let carrito = []; 
let totalCarrito = 0; 

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

    function costoTotal(gastoPers, personas) {
        return gastoPers * personas;
    }

    total = costoTotal(totalPerCapi, personas);


    let resultadoEvento = document.getElementById("resultadoEvento");
    resultadoEvento.innerHTML = `
        <p>Evento: ${tipoEvento}</p>
        <p>Personas: ${personas}</p>
        <p>Menú: ${menuElegido}</p>
        <p>Con bebida: ${conBebida}</p>
        <p>Con música: ${conMusica}</p>
        <p>Con torta: ${conTorta}</p>
        <p>Total por invitado: ${totalPerCapi}</p>
        <p>Total: $${total}</p>`;

        const EVENTO = new Producto(`tu ${tipoEvento}`, total);

        agregarAlCarrito(EVENTO);
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
}

class Producto {
    constructor(articulo, precio) {
        this.articulo = articulo,
        this.precio = precio
    }
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