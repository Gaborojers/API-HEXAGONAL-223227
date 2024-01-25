import { BebidaRepository } from '../domain/BebidasRepository';
import { Bebida } from '../domain/Bebidas';

export class EditBebidaUseCase {
  constructor(private readonly bebidaRepository: BebidaRepository) {}

  async run(id: string, sabor: string, cantidad: number): Promise<Bebida | null> {
    try { 
      const bebida = await this.bebidaRepository.obtenerBebidaPorId(id);

      if (!bebida) {
        return null; // Bebida no encontrada
      }

      const bebidaActualizada = new Bebida(bebida.id, sabor.trim(), cantidad, bebida.precioCosto, bebida.precioVenta);

      await this.bebidaRepository.actualizarBebida(bebidaActualizada);
      return bebidaActualizada;
    } catch (error) {
      return null;
    }
  }
}
