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
exports.CreateUsersUseCase = void 0;
const Users_1 = require("../domain/Users");
class CreateUsersUseCase {
    constructor(userRepository, encryptionHelper, notificationHelper) {
        this.userRepository = userRepository;
        this.encryptionHelper = encryptionHelper;
        this.notificationHelper = notificationHelper;
    }
    run(nombre, apellidoP, apellidoM, genero, edad, correo, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Utilizar el EncryptionHelper para encriptar la contraseña
                const hashedPassword = yield this.encryptionHelper.encryptPassword(password);
                const newUser = new Users_1.Users(0, nombre, apellidoP, apellidoM, genero, edad, correo, hashedPassword);
                const createdUser = this.userRepository.addUser(newUser);
                yield this.notificationHelper.init();
                yield this.notificationHelper.sendNotification(createdUser.id, `¡Hola ${nombre}! Bienvenido a nuestra plataforma `);
                return createdUser;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.CreateUsersUseCase = CreateUsersUseCase;
