// productosRoutes.js
import express from "express";
import { createProductController, deleteProductController } from "./ProductosDependencies";

export const productosRouter = express.Router();

// Nuevos Endpoints para Productos
productosRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);
productosRouter.delete(
  "/:id",
  deleteProductController.run.bind(deleteProductController)
);

export default productosRouter;
