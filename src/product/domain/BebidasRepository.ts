import { BebidasModel } from './Bebidas';

export interface BebidasRepository {
  agregarBebida(bebida: BebidasModel): Promise<void>;
  obtenerBebidaPorId(id: string): Promise<BebidasModel | null>;
  obtenerTodasBebidas(): Promise<BebidasModel[]>;
  actualizarBebida(bebida: BebidasModel): Promise<BebidasModel | null>;
  eliminarBebida(id: string): Promise<boolean>;
}

export class BebidaRepositoryImpl implements BebidasRepository { 
  private bebidas: BebidasModel[] = [];

  async agregarBebida(bebida: BebidasModel): Promise<void> { 
    this.bebidas.push(bebida);
  }

  async obtenerBebidaPorId(id: string): Promise<BebidasModel | null> {
    return this.bebidas.find((bebida) => bebida.id === id) ?? null;
  }

  async obtenerTodasBebidas(): Promise<BebidasModel[]> {
    return [...this.bebidas];
  }

  async actualizarBebida(bebidaActualizada: BebidasModel): Promise<BebidasModel | null> {
    const index = this.bebidas.findIndex((bebida) => bebida.id === bebidaActualizada.id);

    if (index !== -1) {
      this.bebidas[index] = bebidaActualizada;
      return bebidaActualizada;
    }

    return null;
  }

  async eliminarBebida(id: string): Promise<boolean> {
    const index = this.bebidas.findIndex((bebida) => bebida.id === id);

    if (index !== -1) {
      this.bebidas.splice(index, 1);
      return true;
    }

    return false;
  }
}