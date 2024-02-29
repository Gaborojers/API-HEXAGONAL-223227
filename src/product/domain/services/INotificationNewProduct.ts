/*import { Product } from "../../domain/Productos";

export interface INotificationNewProduct {
  sendNotification(product: Product): Promise<boolean>;
}*/

import { Product } from "../Productos";

export interface INotificationNewProduct {
    sendNotification(product: Product): Promise<boolean>;
}