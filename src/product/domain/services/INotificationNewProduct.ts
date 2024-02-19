import { Product } from "../Productos";

export interface INotificationNewProduct {
    sendNotification(prodcut: Product): Promise<boolean>;
}
