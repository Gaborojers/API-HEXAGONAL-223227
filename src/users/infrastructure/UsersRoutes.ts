// userssRoutes.js
import express from "express";
import { createUsersController } from "./UsersDependencies";

export const usersRouter = express.Router();

// Nuevos Endpoints para Productos
usersRouter.post(
  "/",
  (req, res) => createUsersController.run(req, res)
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
export default usersRouter;
