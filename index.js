// Declaración de variables iniciales
let precio = 400000; // Precio base de la laptop
let cantidad = 0; // Cantidad inicial

// Seleccionar los elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Mostrar el precio inicial en el DOM
precioSpan.innerHTML = precio;

// Función para incrementar la cantidad
function incrementarCantidad() {
    cantidad++;
    actualizarCantidadYTotal();
}

// Función para disminuir la cantidad (sin permitir valores negativos)
function disminuirCantidad() {
    if (cantidad > 0) {
        cantidad--;
    }
    actualizarCantidadYTotal();
}

// Función para actualizar la cantidad y el total a pagar en el DOM
function actualizarCantidadYTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = (cantidad * precio).toLocaleString(); // Formato numérico con separador de miles
}

