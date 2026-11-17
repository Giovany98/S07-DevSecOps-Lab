"use strict";

// ACTIVIDAD S07 - LABORATORIO DEVSECOPS
// Version inicial intencionalmente vulnerable.
// Uso exclusivamente academico y controlado.

const lodash = require("lodash");

// VULNERABILIDAD SAST:
// eval() puede ejecutar codigo JavaScript no confiable.
function calcularExpresion(entrada) {
    return eval(entrada);
}

// DEPENDENCIA VULNERABLE SCA:
// lodash 4.17.20 contiene vulnerabilidades conocidas.
function agruparProductos() {
    const productos = [
        "Producto A",
        "Producto B",
        "Producto C"
    ];

    return lodash.chunk(productos, 2);
}

// Solo ejecutar una operacion segura durante el inicio.
console.log("Laboratorio DevSecOps S07 iniciado");
console.log(agruparProductos());

// La funcion vulnerable no se invoca automaticamente.
module.exports = {
    calcularExpresion,
    agruparProductos
};
