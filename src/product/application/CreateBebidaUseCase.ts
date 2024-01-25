import { BebidasModel } from '../domain/Bebidas';
import { BebidasRepository } from '../domain/BebidasRepository';

export class CreateBebidaUseCase {
  constructor(private readonly bebidaRepository: BebidasRepository) {}

  async run(sabor: string, cantidad: number, precioCosto: number, precioVenta: number): Promise<BebidasModel | null> {
    try {
      const nuevaBebida = new BebidasModel(
        /* Generar un ID único según tus necesidades*/
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
