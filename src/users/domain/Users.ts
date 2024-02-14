export class Users {
    constructor(
      readonly id: number,
      readonly nombre: string,
      readonly apellidoP: string,
      readonly apellidoM: string,
      readonly genero: string,
      readonly edad: number,
      readonly correo: string,
      readonly password: string
    ) {}
  }
     