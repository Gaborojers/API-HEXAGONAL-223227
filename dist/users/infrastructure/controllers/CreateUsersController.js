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
exports.CreateUsersController = void 0;
class CreateUsersController {
    constructor(createUsersUseCase) {
        this.createUsersUseCase = createUsersUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const user = yield this.createUsersUseCase.run(data.nombre, data.apellidoP, data.apellidoM, data.genero, data.edad, data.correo, data.password);
                if (user)
                    // Code HTTP: 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: user === null || user === void 0 ? void 0 : user.id,
                            nombre: user === null || user === void 0 ? void 0 : user.nombre,
                            apellidoP: user === null || user === void 0 ? void 0 : user.apellidoP,
                            apellidoM: user === null || user === void 0 ? void 0 : user.apellidoM,
                            genero: user === null || user === void 0 ? void 0 : user.genero,
                            edad: user === null || user === void 0 ? void 0 : user.edad,
                            correo: user === null || user === void 0 ? void 0 : user.correo,
                            password: user === null || user === void 0 ? void 0 : user.password
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                // Code HTTP: 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateUsersController = CreateUsersController;
