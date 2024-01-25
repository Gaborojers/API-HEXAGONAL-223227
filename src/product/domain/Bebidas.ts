export class Bebida {
  constructor(
    readonly id: string,
    readonly sabor: string,
    readonly cantidad: number,
    readonly precioCosto: number,
    readonly precioVenta: number
  ) {} 
}