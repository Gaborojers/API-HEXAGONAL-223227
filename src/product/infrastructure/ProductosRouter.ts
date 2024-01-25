// productosRoutes.js
import express from "express";
import { createProductController, deleteProductController } from "./ProductosDependencies";

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

export default productosRouter;
