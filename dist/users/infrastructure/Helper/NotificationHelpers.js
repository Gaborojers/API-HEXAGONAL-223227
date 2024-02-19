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
exports.NotificationHelper = void 0;
class NotificationHelper {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.notificationService.init();
        });
    }
    sendNotification(userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.notificationService.sendNotification(userId, message);
                console.log(`Notification sent successfully to user ${userId}`);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(`Failed to send notification to user ${userId}: ${error.message}`);
                }
                else {
                    console.error(`Failed to send notification to user ${userId}: ${error}`);
                }
                throw error;
            }
        });
    }
}
exports.NotificationHelper = NotificationHelper;
