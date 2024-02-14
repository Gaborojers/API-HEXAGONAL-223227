import { CreateUsersUseCase } from "../application/CreateUsersUseCase";
//import { UsersRepository } from "../domain/UsersRepository";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { MysqlUsersRepository } from "./MysqlUsersRepository";
import { EncryptionService } from "../application/services/EncryptionService";
import { EncryptionHelper } from "./Helper/EncryptionHelper";
import { NotificationService } from "../application/services/NotificationService";
import { NotificationHelper } from "./Helper/NotificationHelpers";

const mysqlUsersRepository = new MysqlUsersRepository();
//const usersRepository = new UsersRepository();
const encryptionService = new EncryptionService();
const encryptionHelper = new EncryptionHelper(encryptionService);
const notificationService = new NotificationService('amqps://ekuqfepy:ZOF_xj0F2oLUm8ZZQKoy8OvFRr-FSjid@shrimp.rmq.cloudamqp.com/ekuqfepy');
const notificationHelper = new NotificationHelper(notificationService);
const createUsersUseCase = new CreateUsersUseCase(mysqlUsersRepository, encryptionHelper, notificationHelper);
const createUsersController = new CreateUsersController(createUsersUseCase);

export {
  mysqlUsersRepository,
  createUsersUseCase,
  createUsersController
};
