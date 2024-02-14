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
exports.CreateProductoUseCase = void 0;
const Productos_1 = require("../domain/Productos");
class CreateProductoUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    run(name, description, price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = new Productos_1.Product(0, name, description, price);
                const createdProduct = this.productRepository.addProduct(newProduct);
                return createdProduct;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.CreateProductoUseCase = CreateProductoUseCase;
