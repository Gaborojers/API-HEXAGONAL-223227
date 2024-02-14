"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlProductRepository = void 0;
const Productos_1 = require("../domain/Productos");
class MysqlProductRepository {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }
    addProduct(product) {
        const newProduct = new Productos_1.Product(this.nextId++, product.name, product.description, product.price);
        this.products.push(newProduct);
        return newProduct;
    }
    getProductById(productId) {
        const product = this.products.find((p) => p.id === productId);
        return product ? Object.assign({}, product) : null;
    }
    getAllProducts() {
        return this.products.map((product) => (Object.assign({}, product)));
    }
    updateProduct(updatedProduct) {
        const index = this.products.findIndex((p) => p.id === updatedProduct.id);
        if (index !== -1) {
            this.products[index] = Object.assign({}, updatedProduct);
            return Object.assign({}, updatedProduct);
        }
        return null;
    }
    deleteProduct(productId) {
        const index = this.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.MysqlProductRepository = MysqlProductRepository;
