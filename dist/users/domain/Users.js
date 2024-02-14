"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor(id, nombre, apellidoP, apellidoM, genero, edad, correo, password) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.genero = genero;
        this.edad = edad;
        this.correo = correo;
        this.password = password;
    }
}
exports.Users = Users;
 