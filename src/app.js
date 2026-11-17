"use strict";

// ACTIVIDAD S07 - LABORATORIO DEVSECOPS
// Version corregida para validar el Quality Gate.

const lodash = require("lodash");

// CORRECCION SAST:
// Se reemplaza la ejecucion dinamica de codigo
// por operaciones aritmeticas explicitamente permitidas.

function calcularExpresion(entrada) {

    if (typeof entrada !== "string") {
        throw new Error("La entrada debe ser texto");
    }

    const patron = /^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/;

    const resultado = entrada.trim().match(patron);

    if (!resultado) {
        throw new Error("Expresion no permitida");
    }

    const numero1 = Number(resultado[1]);
    const operador = resultado[2];
    const numero2 = Number(resultado[3]);

    if (
        !Number.isFinite(numero1) ||
        !Number.isFinite(numero2)
    ) {
        throw new Error("Numeros invalidos");
    }

    switch (operador) {

        case "+":
            return numero1 + numero2;

        case "-":
            return numero1 - numero2;

        case "*":
            return numero1 * numero2;

        case "/":
            if (numero2 === 0) {
                throw new Error("Division por cero");
            }
            return numero1 / numero2;

        default:
            throw new Error("Operacion no permitida");
    }
}

// CORRECCION SCA:
// Se utiliza lodash 4.17.21.

function agruparProductos() {

    const productos = [
        "Producto A",
        "Producto B",
        "Producto C"
    ];

    return lodash.chunk(productos, 2);
}

console.log("Laboratorio DevSecOps S07 corregido");
console.log(agruparProductos());

module.exports = {
    calcularExpresion,
    agruparProductos
};
