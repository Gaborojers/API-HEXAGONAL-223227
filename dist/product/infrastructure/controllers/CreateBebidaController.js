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
exports.CreateBebidaController = void 0;
class CreateBebidaController {
    constructor(createBebidaUseCase) {
        this.createBebidaUseCase = createBebidaUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sabor, cantidad, precioCosto, precioVenta } = req.body;
            try {
                const bebida = yield this.createBebidaUseCase.run(sabor, cantidad, precioCosto, precioVenta);
                if (bebida) {
                    // HTTP Code: 201 -> Creado
                    res.status(201).json({
                        status: "success",
                        data: {
                            id: bebida.id,
                            sabor: bebida.sabor,
                            cantidad: bebida.cantidad,
                            precioCosto: bebida.precioCosto,
                            precioVenta: bebida.precioVenta,
                        },
                    });
                }
                else {
                    // HTTP Code: 204 Sin contenido
                    res.status(204).json({
                        status: "error",
                        data: "No fue posible agregar el registro",
                    });
                }
            }
            catch (error) {
                // Comprobación de tipo para error
                if (error instanceof Error) {
                    // Acceder a la propiedad message
                    const errorMessage = error.message;
                    // HTTP Code: 204 Sin contenido
                    res.status(204).json({
                        status: "error",
                        data: "Ocurrió un error",
                        message: errorMessage,
                    });
                }
                else {
                    // En este punto, 'error' es de tipo 'unknown'
                    console.error("Error desconocido:", error);
                    // HTTP Code: 204 Sin contenido
                    res.status(204).json({
                        status: "error",
                        data: "Ocurrió un error desconocido",
                    });
                }
            }
        });
    }
}
exports.CreateBebidaController = CreateBebidaController;
