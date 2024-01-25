// bebidasRoutes.js
import express from "express";
import { createBebidaController, editBebidaController } from "./BebidasDependencies";

export const bebidasRouter = express.Router();

// Nuevos Endpoints para Bebidas
bebidasRouter.post(
  "/",
  createBebidaController.run.bind(createBebidaController)
);
bebidasRouter.put(
  "/:id",
  editBebidaController.run.bind(editBebidaController)
);

export default bebidasRouter;
