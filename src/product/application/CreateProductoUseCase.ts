import { ProductRepository } from '../domain/ProductosRepository';
import { Product } from '../domain/Productos';

export class CreateProductoUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(nombre: string, cantidad: number, precioCosto: number, precioVenta: number): Promise<Product | null> {
    try {
      // Crear una instancia de Product
      const newProduct = new Product(0, nombre.trim(), `Description for ${nombre}`, precioVenta);

      // Agregar el producto utilizando el repositorio
      const createdProduct = this.productRepository.addProduct(newProduct);

      return createdProduct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
 