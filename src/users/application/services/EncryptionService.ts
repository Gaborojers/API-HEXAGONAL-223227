// services/EncryptionService.ts
import * as bcrypt from 'bcrypt';

export class EncryptionService {
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }
}
