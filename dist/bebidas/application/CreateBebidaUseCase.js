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
exports.CreateBebidaUseCase = void 0;
const Bebidas_1 = require("../domain/Bebidas");
class CreateBebidaUseCase {
    constructor(bebidaRepository) {
        this.bebidaRepository = bebidaRepository;
    }
    run(sabor, cantidad, precioCosto, precioVenta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaBebida = new Bebidas_1.BebidasModel('ID_GENERADO', sabor.trim(), cantidad, precioCosto, precioVenta);
                if (!nuevaBebida.sabor || nuevaBebida.sabor.length < 3) {
                    return null;
                }
                yield this.bebidaRepository.agregarBebida(nuevaBebida);
                return nuevaBebida;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateBebidaUseCase = CreateBebidaUseCase;
