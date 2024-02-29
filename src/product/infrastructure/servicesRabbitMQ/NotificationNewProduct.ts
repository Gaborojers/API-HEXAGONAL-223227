/*import amqplib from "amqplib";

import { Product } from "../../domain/Productos";
import { INotificationNewProduct } from "../../domain/services/INotificationNewProduct";

export class NotificationNewProduct implements INotificationNewProduct {
  private options: any;
  private url: any;
  private exch: any;
  //private server: any;

  constructor() {
    this.options = {
      vhost: process.env.AMQP_VHOST,
      username: process.env.AMQP_USERNAME,
      password: process.env.AMQP_PASSWORD,
      port: process.env.AMQP_PORT,
    }; 
    this.url = process.env.AMQP_URL;
    this.exch = process.env.AMQP_EXCH;
    //Options solo para cloudamqp
    //this.server = process.env.AMQP_SERVER;
  }

  async sendNotification(product: Product): Promise<boolean> {
    //Opción de conexión para instancia EC2
    const conn = await amqplib.connect(this.url, this.options);
    //Opción de conexión para cloudamqp
    //const conn  = await amqplib.connect(this.server);
    const ch = await conn.createChannel();
    const status = await ch.publish(this.exch, "", Buffer.from("Prueba"));
    return status;
  }
}*/


/*import { Product } from "../../domain/Productos";
import { INotificationNewProduct } from "../../domain/services/INotificationNewProduct";
import amqplib from 'amqplib';

export class NotificactionNewProduct implements INotificationNewProduct {
    async sendNotification(product: Product): Promise<boolean> {
        let ex = "upchiapas.int";
        const conn = await amqplib.connect('amqps://52.21.114.121/');
        const ch = await conn.createChannel();
        let sms = {}
        let status = await ch.publish(ex, '', Buffer.from('Prueba de notificación'));
        return status;
    }
}*/

import * as amqp from "amqplib";
import { INotificationNewProduct } from "../../domain/services/INotificationNewProduct";
import { Product } from "../../domain/Productos";

export class NotificactionNewProduct implements INotificationNewProduct {
    async sendNotification(product: Product): Promise<boolean> {
        const options = {
            username: "Gaboneil",
            password: "LGSC06042004", 
        }
        let exchange = "upchiapas.int"
        let queue = "initial"
        const conn = await amqp.connect("amqp://52.21.114.121");
        const ch = await conn.createChannel();
        ch.assertExchange(exchange, "direct", { 
            durable: true
        });
        ch.assertQueue(queue, {
            durable: true 
        });
        ch.bindQueue(queue, exchange, "");
        let status =  ch.publish(exchange, "", Buffer.from(JSON.stringify(product)));
        return status;
    }
}