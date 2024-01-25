import { CreateProductoUseCase } from "../application/CreateProductoUseCase";
import { DeleteProductUseCase } from "../application/DeleteProductosUseCase";
import { ProductRepository } from "../domain/ProductosRepository";
import { CreateProductController } from "./controllers/CreateProductoController";
import { DeleteProductoController } from "./controllers/DeleteProductoController";
import { MysqlProductRepository } from "./MysqlProductosRepository";

const mysqlProductRepository = new MysqlProductRepository();
const productRepository = new ProductRepository();
const createProductUseCase = new CreateProductoUseCase(mysqlProductRepository);
const deleteProductUseCase = new DeleteProductUseCase(mysqlProductRepository);
const createProductController = new CreateProductController(createProductUseCase);
const deleteProductController = new DeleteProductoController(productRepository,deleteProductUseCase);

export {
  mysqlProductRepository,
  createProductUseCase,
  deleteProductUseCase,
  createProductController,
  deleteProductController,
};
