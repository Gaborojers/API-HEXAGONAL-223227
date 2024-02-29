/*import { ProductRepository } from '../domain/ProductosRepository';
import { Product } from '../domain/Productos';
//import { INotificactionNewProduct } from '../domain/services/INotificationNewProduct';
import { NotificactionProductUseCase } from './services/NotificationNewProduct';

export class CreateProductoUseCase {
  constructor(private readonly productRepository: ProductRepository, readonly sendNotification: NotificactionProductUseCase) {}

  async run(name: string, description: string, price: number): Promise<Product | null> {
    try {
      const newProduct = new Product(0, name, description, price);

      const createdProduct = this.productRepository.addProduct(newProduct);

      this.sendNotification.run(createdProduct);
      return createdProduct;
    } catch (error) { 
      console.error(error);
      return null;
    } 
  }
} */


import { ProductRepository } from '../domain/ProductosRepository';
import { Product } from '../domain/Productos';
//import { INotificactionNewProduct } from '../domain/services/INotificationNewProduct';
import { NotificactionProductUseCase } from './services/NotificationNewProduct';

export class CreateProductoUseCase {
  constructor(private readonly productRepository: ProductRepository, readonly sendNotification: NotificactionProductUseCase) {}

  async run(name: string, description: string, price: number): Promise<Product | null> {
    try {
      const newProduct = new Product(0, name, description, price);
  
      const createdProduct = await this.productRepository.addProduct(newProduct);
  
      if (createdProduct) {
        this.sendNotification.run(createdProduct);
      }
  
      return createdProduct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }  
} 
