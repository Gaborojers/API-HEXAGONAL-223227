import { Product } from "../../domain/Productos";
import { INotificationNewProduct } from "../../domain/services/INotificationNewProduct";
import amqplib from 'amqplib';

export class NotificactionNewProduct implements INotificationNewProduct {
    async sendNotification(prodcut: Product): Promise<boolean> {
        let ex = "upchiapas.as";
        const conn = await amqplib.connect('amqps://ekuqfepy:ZOF_xj0F2oLUm8ZZQKoy8OvFRr-FSjid@shrimp.rmq.cloudamqp.com/ekuqfepy');
        const ch = await conn.createChannel();
        let sms = {}
        let status = await ch.publish(ex, '', Buffer.from('Prueba de notificación'));
        return status;
    }
}