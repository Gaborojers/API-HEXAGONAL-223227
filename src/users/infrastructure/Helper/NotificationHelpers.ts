import { NotificationService } from "../../application/services/NotificationService";

export class NotificationHelper {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  async init(): Promise<void> {
    await this.notificationService.init();
  }

  async sendNotification(userId: number, message: string): Promise<void> {
    try {
      await this.notificationService.sendNotification(userId, message);
      console.log(`Notification sent successfully to user ${userId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Failed to send notification to user ${userId}: ${error.message}`);
      } else {
        console.error(`Failed to send notification to user ${userId}: ${error}`);
      }
      throw error;
    }
  }
}