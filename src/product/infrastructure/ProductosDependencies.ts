import { CreateProductoUseCase } from "../application/CreateProductoUseCase";
import { DeleteProductUseCase } from "../application/DeleteProductosUseCase";
import { ProductRepository } from "../domain/ProductosRepository";
import { CreateProductController } from "./controllers/CreateProductoController";
import { DeleteProductoController } from "./controllers/DeleteProductoController";
import { MysqlProductRepository } from "./MysqlProductosRepository";
import { GetProductByIdUseCase } from "../application/GetProductoByIdUseCase";
import { GetProductByIdController } from "./controllers/GetProductoByIdController";

const mysqlProductRepository = new MysqlProductRepository();
const productRepository = new ProductRepository();
const createProductUseCase = new CreateProductoUseCase(mysqlProductRepository);
const deleteProductUseCase = new DeleteProductUseCase(mysqlProductRepository);
const createProductController = new CreateProductController(createProductUseCase);
const deleteProductController = new DeleteProductoController(productRepository,deleteProductUseCase);
const getProductByIdUseCase = new GetProductByIdUseCase(mysqlProductRepository);
const getProductByIdController = new GetProductByIdController(getProductByIdUseCase);

export {
  mysqlProductRepository,
  createProductUseCase,
  deleteProductUseCase,
  createProductController,
  deleteProductController,
  getProductByIdUseCase,
  getProductByIdController
};
