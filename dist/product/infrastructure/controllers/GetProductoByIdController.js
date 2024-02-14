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
exports.GetProductByIdController = void 0;
class GetProductByIdController {
    constructor(getProductByIdUseCase) {
        this.getProductByIdUseCase = getProductByIdUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const product = yield this.getProductByIdUseCase.run(parseInt(id, 10));
                if (product) {
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                        },
                    });
                }
                else {
                    res.status(404).json({
                        status: "error",
                        data: "Producto no encontrado",
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    const errorMessage = error.message;
                    res.status(500).json({
                        status: "error",
                        data: "Ocurrió un error",
                        message: errorMessage,
                    });
                }
                else {
                    console.error("Error desconocido:", error);
                    res.status(500).json({
                        status: "error",
                        data: "Ocurrió un error desconocido",
                    });
                }
            }
        });
    }
}
exports.GetProductByIdController = GetProductByIdController;
