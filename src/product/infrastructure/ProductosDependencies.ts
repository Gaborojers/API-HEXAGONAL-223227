import { CreateProductoUseCase } from "../application/CreateProductoUseCase";
import { DeleteProductUseCase } from "../application/DeleteProductosUseCase";
import { CreateProductController } from "./controllers/CreateProductoController";
import { DeleteProductoController } from "./controllers/DeleteProductoController";
import { MysqlProductosRepository } from "./MysqlProductosRepository";

const mysqlProductRepository = new MysqlProductosRepository();
const createProductUseCase = new CreateProductoUseCase(mysqlProductRepository);
const deleteProductUseCase = new DeleteProductUseCase(mysqlProductRepository);
const createProductController = new CreateProductController(createProductUseCase);
const deleteProductController = new DeleteProductoController(deleteProductUseCase);

export {
  mysqlProductRepository,
  createProductUseCase,
  deleteProductUseCase,
  createProductController,
  deleteProductController,
};
