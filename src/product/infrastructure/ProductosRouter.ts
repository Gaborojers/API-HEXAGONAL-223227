// productosRoutes.js
import express from "express";
import { createProductController, deleteProductController, getProductByIdController } from "./ProductosDependencies";

export const productosRouter = express.Router();

// Nuevos Endpoints para Productos
productosRouter.post(
  "/",
  (req, res) => createProductController.run(req, res)
  //createProductController.run.bind(createProductController)
);
productosRouter.delete(
  "/:id",
  (req, res) => deleteProductController.run(req, res)
  //deleteProductController.run.bind(deleteProductController)
);

productosRouter.get(
  "/:id",
  (req, res) => getProductByIdController.run(req, res)
  //getProductByIdController.run.bind(getProductByIdController)
);

export default productosRouter;
