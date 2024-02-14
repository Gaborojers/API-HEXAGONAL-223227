"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRouter = void 0;
// productosRoutes.js
const express_1 = __importDefault(require("express"));
const ProductosDependencies_1 = require("./ProductosDependencies");
exports.productosRouter = express_1.default.Router();
// Nuevos Endpoints para Productos
exports.productosRouter.post("/", (req, res) => ProductosDependencies_1.createProductController.run(req, res)
//createProductController.run.bind(createProductController)
);
exports.productosRouter.delete("/:id", (req, res) => ProductosDependencies_1.deleteProductController.run(req, res)
//deleteProductController.run.bind(deleteProductController)
);
exports.productosRouter.get("/:id", (req, res) => ProductosDependencies_1.getProductByIdController.run(req, res)
//getProductByIdController.run.bind(getProductByIdController)
);
exports.default = exports.productosRouter;
