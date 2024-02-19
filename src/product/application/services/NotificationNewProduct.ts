import { Product } from "../../domain/Productos";
import { NotificactionNewProduct } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificactionProductUseCase {
    constructor(readonly serviceNotification: NotificactionNewProduct){
    }

    async run(product: Product){
        await this.serviceNotification.sendNotification(product);
    }
}