// application/CreateUsersUseCase.ts
import { UsersRepository } from '../domain/UsersRepository';
import { Users } from '../domain/Users';
import { EncryptionHelper } from '../infrastructure/Helper/EncryptionHelper';
import { NotificationHelper } from '../infrastructure/Helper/NotificationHelpers';

export class CreateUsersUseCase {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly encryptionHelper: EncryptionHelper,
    private readonly notificationHelper: NotificationHelper
  ) {}

  async run(nombre: string, apellidoP: string, apellidoM: string, genero: string, edad: number, correo: string, password: string): Promise<Users | null> {
    try {
      // Utilizar el EncryptionHelper para encriptar la contraseña
      const hashedPassword = await this.encryptionHelper.encryptPassword(password);

      const newUser = new Users(0, nombre, apellidoP, apellidoM, genero, edad, correo, hashedPassword);

      const createdUser = this.userRepository.addUser(newUser);

      await this.notificationHelper.init();
      await this.notificationHelper.sendNotification(createdUser.id, `¡Hola ${nombre}! Bienvenido a nuestra plataforma `);

      return createdUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
