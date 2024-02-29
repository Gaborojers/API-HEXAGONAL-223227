import { CreateProductoUseCase } from "../application/CreateProductoUseCase";
import { DeleteProductUseCase } from "../application/DeleteProductosUseCase";
import type { ProductRepository } from "../domain/ProductosRepository";
import { CreateProductController } from "./controllers/CreateProductoController";
import { DeleteProductoController } from "./controllers/DeleteProductoController";
import { MysqlProductRepository } from "./MysqlProductosRepository";
import { GetProductByIdUseCase } from "../application/GetProductoByIdUseCase";
import { GetProductByIdController } from "./controllers/GetProductoByIdController";
import { INotificationNewProduct } from "../domain/services/INotificationNewProduct";
import { NotificactionNewProduct } from "./servicesRabbitMQ/NotificationNewProduct";
import { NotificactionProductUseCase } from "../application/services/NotificationNewProduct";

const mysqlProductRepository = new MysqlProductRepository();
const productRepository: ProductRepository = new MysqlProductRepository();
const servicesNotification = new NotificactionNewProduct();
const serviceNotificationUseCase = new NotificactionProductUseCase(servicesNotification);
const createProductUseCase = new CreateProductoUseCase(mysqlProductRepository, serviceNotificationUseCase);
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
  getProductByIdController,
  servicesNotification,
  serviceNotificationUseCase
};
 