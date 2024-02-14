// helper/infrastructure/EncryptionHelper.ts
import { EncryptionService } from '../../application/services/EncryptionService';

export class EncryptionHelper {
  private encryptionService: EncryptionService;

  constructor(encryptionService: EncryptionService) {
    this.encryptionService = encryptionService;
  }

  async encryptPassword(password: string): Promise<string> {
    return this.encryptionService.hashPassword(password);
  }
}
