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
exports.GetProductByIdUseCase = void 0;
class GetProductByIdUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    run(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productEncontrado = this.productRepository.getProductById(productId);
                return productEncontrado || null;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.GetProductByIdUseCase = GetProductByIdUseCase;
