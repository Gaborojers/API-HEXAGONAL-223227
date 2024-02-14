"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const BebidasRouter_1 = require("./bebidas/infrastructure/BebidasRouter");
const ProductosRouter_1 = require("./product/infrastructure/ProductosRouter");
const UsersRoutes_1 = require("./users/infrastructure/UsersRoutes"); 
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
// Rutas para el servicio de bebidas
app.use("/bebidas", BebidasRouter_1.bebidasRouter);
// Rutas para el servicio de productos
app.use("/productos", ProductosRouter_1.productosRouter);
// Rutas para el servicio de productos
app.use("/users", UsersRoutes_1.usersRouter);
// Puerto para la aplicación
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
// Inicio del servidor
app.listen(port, () => {
    signale.success(`Server listening on port ${port}`);
});
