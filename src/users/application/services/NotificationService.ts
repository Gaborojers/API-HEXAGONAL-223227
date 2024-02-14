import { Channel, Connection, connect } from 'amqplib';

export class NotificationService {
  private channel: Channel | null = null;
  private readonly connectionUrl: string;

  constructor(connectionUrl: string) {
    this.connectionUrl = connectionUrl;
  }

  async init(): Promise<void> {
    // Establecer conexión con RabbitMQ
    const connection = await connect(this.connectionUrl);
    this.channel = await connection.createChannel();
  }

  async sendNotification(userId: number, message: string): Promise<void> {
    if (!this.channel) {
      throw new Error('La conexión con RabbitMQ no está establecida');
    }

    // Declarar la cola
    const queueName = 'notifications';
    await this.channel.assertQueue(queueName, { durable: false });

    // Enviar mensaje a la cola
    this.channel.sendToQueue(queueName, Buffer.from(message), { headers: { userId } });
    console.log(" [x] Sent notification for user '%s'", userId);
  }

  async close(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
    }
  }
}