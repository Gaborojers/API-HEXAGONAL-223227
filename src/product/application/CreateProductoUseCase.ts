import { ProductRepository } from '../domain/ProductosRepository';
import { Product } from '../domain/Productos';

export class CreateProductoUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(name: string, description: string, price: number): Promise<Product | null> {
    try {
      const newProduct = new Product(0, name, description, price);

      const createdProduct = this.productRepository.addProduct(newProduct);

      return createdProduct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
 