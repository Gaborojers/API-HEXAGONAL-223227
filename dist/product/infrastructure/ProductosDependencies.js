"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByIdController = exports.getProductByIdUseCase = exports.deleteProductController = exports.createProductController = exports.deleteProductUseCase = exports.createProductUseCase = exports.mysqlProductRepository = void 0;
const CreateProductoUseCase_1 = require("../application/CreateProductoUseCase");
const DeleteProductosUseCase_1 = require("../application/DeleteProductosUseCase");
const ProductosRepository_1 = require("../domain/ProductosRepository");
const CreateProductoController_1 = require("./controllers/CreateProductoController");
const DeleteProductoController_1 = require("./controllers/DeleteProductoController");
const MysqlProductosRepository_1 = require("./MysqlProductosRepository");
const GetProductoByIdUseCase_1 = require("../application/GetProductoByIdUseCase");
const GetProductoByIdController_1 = require("./controllers/GetProductoByIdController");
const mysqlProductRepository = new MysqlProductosRepository_1.MysqlProductRepository();
exports.mysqlProductRepository = mysqlProductRepository;
const productRepository = new ProductosRepository_1.ProductRepository();
const createProductUseCase = new CreateProductoUseCase_1.CreateProductoUseCase(mysqlProductRepository);
exports.createProductUseCase = createProductUseCase;
const deleteProductUseCase = new DeleteProductosUseCase_1.DeleteProductUseCase(mysqlProductRepository);
exports.deleteProductUseCase = deleteProductUseCase;
const createProductController = new CreateProductoController_1.CreateProductController(createProductUseCase);
exports.createProductController = createProductController;
const deleteProductController = new DeleteProductoController_1.DeleteProductoController(productRepository, deleteProductUseCase);
exports.deleteProductController = deleteProductController;
const getProductByIdUseCase = new GetProductoByIdUseCase_1.GetProductByIdUseCase(mysqlProductRepository);
exports.getProductByIdUseCase = getProductByIdUseCase;
const getProductByIdController = new GetProductoByIdController_1.GetProductByIdController(getProductByIdUseCase);
exports.getProductByIdController = getProductByIdController;
