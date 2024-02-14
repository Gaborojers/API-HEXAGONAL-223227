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
exports.EditBebidaUseCase = void 0;
const Bebidas_1 = require("../domain/Bebidas");
class EditBebidaUseCase {
    constructor(bebidaRepository) {
        this.bebidaRepository = bebidaRepository;
    }
    run(id, sabor, cantidad) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bebida = yield this.bebidaRepository.obtenerBebidaPorId(id);
                if (!bebida) {
                    return null; // Bebida no encontrada
                }
                const bebidaActualizada = new Bebidas_1.BebidasModel(bebida.id, sabor.trim(), cantidad, bebida.precioCosto, bebida.precioVenta);
                yield this.bebidaRepository.actualizarBebida(bebidaActualizada);
                return bebidaActualizada;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.EditBebidaUseCase = EditBebidaUseCase;
