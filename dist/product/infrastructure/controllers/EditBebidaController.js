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
exports.EditBebidaController = void 0;
class EditBebidaController {
    constructor(editBebidaUseCase) {
        this.editBebidaUseCase = editBebidaUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, sabor, cantidad } = req.body;
            try {
                const bebida = yield this.editBebidaUseCase.run(id, sabor, cantidad);
                if (bebida) {
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: bebida.id,
                            sabor: bebida.sabor,
                            cantidad: bebida.cantidad,
                        },
                    });
                }
                else {
                    res.status(404).send({
                        status: "error",
                        data: "Bebida no encontrada",
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).send({
                        status: "error",
                        data: "Ocurrió un error",
                        message: error.message,
                    });
                }
                else {
                    res.status(500).send({
                        status: "error",
                        data: "Ocurrió un error",
                        message: "Error desconocido",
                    });
                }
            }
        });
    }
}
exports.EditBebidaController = EditBebidaController;
