import { CreateBebidaUseCase } from "../application/CreateBebidaUseCase";
import { EditBebidaUseCase } from "../application/EditBebidaUseCase";
import { CreateBebidaController } from "./controllers/CreateBebidaController";
import { EditBebidaController } from "./controllers/EditBebidaController";
import { MysqlBebidasRepository } from "./MysqlBebidasRepository";

const mysqlBebidasRepository = new MysqlBebidasRepository();
const createBebidaUseCase = new CreateBebidaUseCase(mysqlBebidasRepository);
const editBebidaUseCase = new EditBebidaUseCase(mysqlBebidasRepository);
const createBebidaController = new CreateBebidaController(createBebidaUseCase);
const editBebidaController = new EditBebidaController(editBebidaUseCase);

export {
  mysqlBebidasRepository,
  createBebidaUseCase,
  editBebidaUseCase,
  createBebidaController,
  editBebidaController,
}; 
