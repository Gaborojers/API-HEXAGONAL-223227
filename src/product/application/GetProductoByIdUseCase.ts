import { ProductRepository } from "../domain/ProductosRepository";
import { Product } from "../domain/Productos";

export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(productId: number): Promise<Product | null> {
    try {
      const productEncontrado = this.productRepository.getProductById(productId);

      return productEncontrado || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
