import { Bebida } from '../domain/Bebidas';
import { BebidaRepository } from '../domain/BebidasRepository';

export class CreateBebidaUseCase {
  constructor(private readonly bebidaRepository: BebidaRepository) {}

  async run(sabor: string, cantidad: number, precioCosto: number, precioVenta: number): Promise<Bebida | null> {
    try {
      const nuevaBebida = new Bebida(
        /* Generar un ID único según tus necesidades, puedes usar bibliotecas como 'uuid' o generar IDs manualmente */
        'ID_GENERADO',
        sabor.trim(),
        cantidad,
        precioCosto,
        precioVenta
      );

      if (!nuevaBebida.sabor || nuevaBebida.sabor.length < 3) {
        return null;
      }

      await this.bebidaRepository.agregarBebida(nuevaBebida);
      return nuevaBebida;
    } catch (error) {
      return null;
    }
  }
}
