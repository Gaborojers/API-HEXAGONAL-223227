import express from "express";
import { Signale } from "signale";
import { bebidasRouter } from "./product/infrastructure/BebidasRouter";
import { productosRouter } from "./product/infrastructure/ProductosRouter";

const app = express();
const signale = new Signale();
app.use(express.json());

// Rutas para el servicio de bebidas
app.use("/bebidas", bebidasRouter);

// Rutas para el servicio de productos
app.use("/productos", productosRouter);

// Puerto para la aplicación
const port = process.env.PORT || 3000;

// Inicio del servidor
app.listen(port, () => {
  signale.success(`Server listening on port ${port}`);
});
