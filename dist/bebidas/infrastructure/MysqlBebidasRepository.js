"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlBebidasRepository = void 0;
const mysql_1 = require("../../database/mysql");
class MysqlBebidasRepository {
    constructor() {
        this.tableName = "bebidas";
    }
    agregarBebida(bebida) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sabor, cantidad, precioCosto, precioVenta } = bebida;
            const sql = "INSERT INTO bebidas (sabor, cantidad, precioCosto, precioVenta) VALUES (?, ?, ?, ?)";
            const params = [sabor, cantidad, precioCosto, precioVenta];
            try {
                yield (0, mysql_1.query)(sql, params);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al agregar bebida");
            }
        });
    }
    obtenerBebidaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM bebidas WHERE id = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.length === 0) {
                    return null;
                }
                return this.mapToBebidasModel(result[0]);
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al obtener bebida por ID");
            }
        });
    }
    obtenerTodasBebidas() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM bebidas";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataBebidas = Object.values(JSON.parse(JSON.stringify(data)));
                return dataBebidas.map((bebida) => this.mapToBebidasModel(bebida));
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al obtener todas las bebidas");
            }
        });
    }
    actualizarBebida(bebida) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, sabor, cantidad, precioCosto, precioVenta } = bebida;
            const sql = "UPDATE bebidas SET sabor = ?, cantidad = ?, precioCosto = ?, precioVenta = ? WHERE id = ?";
            const params = [sabor, cantidad, precioCosto, precioVenta, id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null;
                }
                return {
                    id,
                    sabor,
                    cantidad,
                    precioCosto,
                    precioVenta,
                };
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al actualizar bebida");
            }
        });
    }
    eliminarBebida(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM bebidas WHERE id = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                console.error(error);
                throw new Error("Error al eliminar bebida");
            }
        });
    }
    mapToBebidasModel(bebidaData) {
        return {
            id: bebidaData.id.toString(),
            sabor: bebidaData.sabor,
            cantidad: bebidaData.cantidad,
            precioCosto: bebidaData.precioCosto,
            precioVenta: bebidaData.precioVenta,
        };
    }
}
exports.MysqlBebidasRepository = MysqlBebidasRepository;
