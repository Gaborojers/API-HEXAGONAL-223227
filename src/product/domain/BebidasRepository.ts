import { Bebida } from './Bebidas';

export interface BebidaRepository {
  agregarBebida(bebida: Bebida): Promise<void>;
  obtenerBebidaPorId(id: string): Promise<Bebida | null>;
  obtenerTodasBebidas(): Promise<Bebida[]>;
  actualizarBebida(bebida: Bebida): Promise<Bebida | null>;
  eliminarBebida(id: string): Promise<boolean>;
}

export class BebidaRepositoryImpl implements BebidaRepository { 
  private bebidas: Bebida[] = [];

  async agregarBebida(bebida: Bebida): Promise<void> { 
    this.bebidas.push(bebida);
  }

  async obtenerBebidaPorId(id: string): Promise<Bebida | null> {
    return this.bebidas.find((bebida) => bebida.id === id) ?? null;
  }

  async obtenerTodasBebidas(): Promise<Bebida[]> {
    return [...this.bebidas];
  }

  async actualizarBebida(bebidaActualizada: Bebida): Promise<Bebida | null> {
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