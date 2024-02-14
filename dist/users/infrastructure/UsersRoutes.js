"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
// userssRoutes.js
const express_1 = __importDefault(require("express"));
const UsersDependencies_1 = require("./UsersDependencies");
exports.usersRouter = express_1.default.Router();
// Nuevos Endpoints para Productos
exports.usersRouter.post("/", (req, res) => UsersDependencies_1.createUsersController.run(req, res)
//createProductController.run.bind(createProductController)
);
/*usersRouter.delete(
  "/:id",
  (req, res) => deleteUsersController.run(req, res)
  //deleteProductController.run.bind(deleteProductController)
);

usersRouter.get(
  "/:id",
  (req, res) => getUsersByIdController.run(req, res)
  //getProductByIdController.run.bind(getProductByIdController)
);
*/
exports.default = exports.usersRouter;
