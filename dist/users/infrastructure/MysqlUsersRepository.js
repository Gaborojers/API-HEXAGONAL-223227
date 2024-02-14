"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlUsersRepository = void 0;
const Users_1 = require("../domain/Users");
class MysqlUsersRepository {
    constructor() {
        this.users = [];
        this.nextId = 1;
    }
    addUser(user) {
        const newUser = new Users_1.Users(this.nextId++, user.nombre, user.apellidoP, user.apellidoM, user.genero, user.edad, user.correo, user.password);
        this.users.push(newUser);
        return newUser;
    }
    getUserById(userId) {
        const user = this.users.find((p) => p.id === userId);
        return user ? Object.assign({}, user) : null;
    }
    getAllUsers() {
        return this.users.map((user) => (Object.assign({}, user)));
    }
    updateUser(updatedUser) {
        const index = this.users.findIndex((p) => p.id === updatedUser.id);
        if (index !== -1) {
            this.users[index] = Object.assign({}, updatedUser);
            return Object.assign({}, updatedUser);
        }
        return null;
    }
    deleteUser(userId) {
        const index = this.users.findIndex((p) => p.id === userId);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.MysqlUsersRepository = MysqlUsersRepository;
