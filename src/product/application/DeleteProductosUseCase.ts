import { Product } from '../domain/Productos';
import { ProductRepository } from '../domain/ProductosRepository';

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(productId: number): Promise<boolean> {
    try {
      const product: Product | null = this.productRepository.getProductById(productId);

      // Verifica si el producto existe antes de intentar eliminarlo
      if (product) {
        const isDeleted: boolean = this.productRepository.deleteProduct(product.id);

        // Devuelve true si el producto existía y se eliminó correctamente
        return isDeleted;
      }
 
      // Si el producto no existe
      return false;
    } catch (error) {
      // Manejar errores
      console.error(error);
      return false;
    }
  }
}
