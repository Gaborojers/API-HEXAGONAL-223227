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
exports.BebidaRepositoryImpl = void 0;
class BebidaRepositoryImpl {
    constructor() {
        this.bebidas = [];
    }
    agregarBebida(bebida) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bebidas.push(bebida);
        });
    }
    obtenerBebidaPorId(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.bebidas.find((bebida) => bebida.id === id)) !== null && _a !== void 0 ? _a : null;
        });
    }
    obtenerTodasBebidas() {
        return __awaiter(this, void 0, void 0, function* () {
            return [...this.bebidas];
        });
    }
    actualizarBebida(bebidaActualizada) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.bebidas.findIndex((bebida) => bebida.id === bebidaActualizada.id);
            if (index !== -1) {
                this.bebidas[index] = bebidaActualizada;
                return bebidaActualizada;
            }
            return null;
        });
    }
    eliminarBebida(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.bebidas.findIndex((bebida) => bebida.id === id);
            if (index !== -1) {
                this.bebidas.splice(index, 1);
                return true;
            }
            return false;
        });
    }
}
exports.BebidaRepositoryImpl = BebidaRepositoryImpl;
