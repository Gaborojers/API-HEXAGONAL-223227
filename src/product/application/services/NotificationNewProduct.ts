/*import { Product } from "../../domain/Productos";
import { NotificationNewProduct } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificationProductUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewProduct) {}

  async run(product: Product) {
    await this.serviceNotifiacion.sendNotification(product);
  }
}*/
  

import { Product } from "../../domain/Productos";
import { NotificactionNewProduct } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificactionProductUseCase {
    constructor(readonly serviceNotification: NotificactionNewProduct){
    }

    async run(product: Product){
        await this.serviceNotification.sendNotification(product);
    }
} 