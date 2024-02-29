import express from "express";
import cors from "cors"; // Importa el middleware cors
import { Signale } from "signale";
import { bebidasRouter } from "./bebidas/infrastructure/BebidasRouter";
import { productosRouter } from "./product/infrastructure/ProductosRouter";
import { usersRouter } from './users/infrastructure/UsersRoutes';

const app = express();
const signale = new Signale();
app.use(express.json());

// Habilita CORS para todas las solicitudes
app.use(cors());

// Rutas para el servicio de bebidas
app.use("/bebidas", bebidasRouter);

// Rutas para el servicio de productos
app.use("/productos", productosRouter);

// Rutas para el servicio de productos
app.use("/users", usersRouter);

// Puerto para la aplicación
const port = process.env.PORT ?? 3000;

// Inicio del servidor
app.listen(port, () => {
  signale.success(`Server listening on port ${port}`);
});
