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
exports.DeleteProductoController = void 0;
const ProductosRepository_1 = require("../../domain/ProductosRepository");
const DeleteProductosUseCase_1 = require("../../application/DeleteProductosUseCase");
class DeleteProductoController {
    constructor(productRepository, deleteProductUseCase) {
        this.productRepository = productRepository;
        this.deleteProductUseCase = deleteProductUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id; // Obtener el ID desde los parámetros de la URL
            try {
                const product = this.productRepository.getProductById(Number(productId));
                // Verifica si el producto existe antes de intentar eliminarlo
                if (product) {
                    const isDeleted = yield this.deleteProductUseCase.run(product.id);
                    // Devolver true si el producto existía y se eliminó correctamente
                    if (isDeleted) {
                        res.status(200).send({
                            status: "success",
                            data: "Producto eliminado correctamente",
                        });
                    }
                    else {
                        // Si no se pudo eliminar el producto
                        res.status(500).send({
                            status: "error",
                            data: "Ocurrió un error al eliminar el producto",
                            error: "Error desconocido",
                        });
                    }
                }
                else {
                    // Si el producto no existe
                    res.status(404).send({
                        status: "error",
                        data: "Producto no encontrado",
                    });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send({
                    status: "error",
                    data: "Ocurrió un error al eliminar el producto",
                    error: "Error desconocido",
                });
            }
        });
    }
}
exports.DeleteProductoController = DeleteProductoController;
const productRepository = new ProductosRepository_1.ProductRepository();
const deleteProductUseCase = new DeleteProductosUseCase_1.DeleteProductUseCase(productRepository);
const deleteProductController = new DeleteProductoController(productRepository, deleteProductUseCase);
