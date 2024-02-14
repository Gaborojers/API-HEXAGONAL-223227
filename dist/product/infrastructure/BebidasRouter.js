"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bebidasRouter = void 0;
// bebidasRoutes.js
const express_1 = __importDefault(require("express"));
const BebidasDependencies_1 = require("./BebidasDependencies");
exports.bebidasRouter = express_1.default.Router();
// Nuevos Endpoints para Bebidas
exports.bebidasRouter.post("/", BebidasDependencies_1.createBebidaController.run.bind(BebidasDependencies_1.createBebidaController));
exports.bebidasRouter.put("/:id", BebidasDependencies_1.editBebidaController.run.bind(BebidasDependencies_1.editBebidaController));
exports.default = exports.bebidasRouter;
