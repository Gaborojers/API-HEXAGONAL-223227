import { BebidasRepository } from '../domain/BebidasRepository';
import { BebidasModel } from '../domain/Bebidas';

export class EditBebidaUseCase {
  constructor(private readonly bebidaRepository: BebidasRepository) {}

  async run(id: string, sabor: string, cantidad: number): Promise<BebidasModel | null> {
    try { 
      const bebida = await this.bebidaRepository.obtenerBebidaPorId(id);

      if (!bebida) {
        return null; // Bebida no encontrada
      }

      const bebidaActualizada = new BebidasModel(bebida.id, sabor.trim(), cantidad, bebida.precioCosto, bebida.precioVenta);

      await this.bebidaRepository.actualizarBebida(bebidaActualizada);
      return bebidaActualizada;
    } catch (error) {
      return null;
    }
  }
}
