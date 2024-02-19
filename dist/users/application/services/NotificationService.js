"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
// services/NotificationService.ts
const amqplib_1 = require("amqplib");
class NotificationService {
    constructor(connectionUrl) {
        this.channel = null;
        this.connectionUrl = connectionUrl;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // Establecer conexión con RabbitMQ
            const connection = yield (0, amqplib_1.connect)(this.connectionUrl);
            this.channel = yield connection.createChannel();
        });
    }
    sendNotification(userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.channel) {
                throw new Error('La conexión con RabbitMQ no está establecida');
            }
            /*
            // Declarar el exchange
            const exchangeName = 'notifications_exchange';
            await this.channel.assertExchange(exchangeName, 'direct', { durable: false });
        
            // Enviar mensaje al exchange
            this.channel.publish(exchangeName, '', Buffer.from(message), { headers: { userId } });
            console.log(" [x] Sent notification for user '%s'", userId);
          }
          */
            // Declarar la cola
            const queueName = 'notifications';
            yield this.channel.assertQueue(queueName, { durable: false });
            // Enviar mensaje a la cola
            this.channel.sendToQueue(queueName, Buffer.from(message), { headers: { userId } });
            console.log(" [x] Sent notification for user '%s'", userId);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.channel) {
                yield this.channel.close();
            }
        });
    }
}
exports.NotificationService = NotificationService;
