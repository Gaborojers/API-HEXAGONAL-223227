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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificactionNewProduct = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class NotificactionNewProduct {
    sendNotification(prodcut) {
        return __awaiter(this, void 0, void 0, function* () {
            let ex = "upchiapas.as";
            const conn = yield amqplib_1.default.connect('amqps://ekuqfepy:ZOF_xj0F2oLUm8ZZQKoy8OvFRr-FSjid@shrimp.rmq.cloudamqp.com/ekuqfepy');
            const ch = yield conn.createChannel();
            let sms = {};
            let status = yield ch.publish(ex, '', Buffer.from('Prueba de notificación'));
            return status;
        });
    }
}
exports.NotificactionNewProduct = NotificactionNewProduct;
