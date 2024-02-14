import { query } from "../../database/mysql";
import { BebidasModel } from "../domain/Bebidas";
import { BebidasRepository } from "../domain/BebidasRepository";

export class MysqlBebidasRepository implements BebidasRepository {
  private tableName = "bebidas";

  async agregarBebida(bebida: BebidasModel): Promise<void> {
    const { sabor, cantidad, precioCosto, precioVenta } = bebida;
  
    const sql =
      "INSERT INTO bebidas (sabor, cantidad, precioCosto, precioVenta) VALUES (?, ?, ?, ?)";
    const params: any[] = [sabor, cantidad, precioCosto, precioVenta];
  
    try {
      await query(sql, params);
    } catch (error) {
      console.error(error);
      throw new Error("Error al agregar bebida");
    }
  }
  

  async obtenerBebidaPorId(id: string): Promise<BebidasModel | null> {
    const sql = "SELECT * FROM bebidas WHERE id = ?";
    const params: any[] = [id];

    try {
      const [result]: any = await query(sql, params);

      if (result.length === 0) {
        return null;
      }

      return this.mapToBebidasModel(result[0]);
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener bebida por ID");
    }
  }

  async obtenerTodasBebidas(): Promise<BebidasModel[]> {
    const sql = "SELECT * FROM bebidas";

    try {
      const [data]: any = await query(sql, []);
      const dataBebidas = Object.values(JSON.parse(JSON.stringify(data)));

      return dataBebidas.map((bebida: any) => this.mapToBebidasModel(bebida));
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener todas las bebidas");
    }
  }

  async actualizarBebida(bebida: BebidasModel): Promise<BebidasModel | null> {
    const { id, sabor, cantidad, precioCosto, precioVenta } = bebida;
  
    const sql =
      "UPDATE bebidas SET sabor = ?, cantidad = ?, precioCosto = ?, precioVenta = ? WHERE id = ?";
    const params: any[] = [sabor, cantidad, precioCosto, precioVenta, id];
  
    try {
      const [result]: any = await query(sql, params);
  
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
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar bebida");
    }
  }
  

  async eliminarBebida(id: string): Promise<boolean> {
    const sql = "DELETE FROM bebidas WHERE id = ?";
    const params: any[] = [id];

    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar bebida");
    }
  }

  private mapToBebidasModel(bebidaData: any): BebidasModel {
    return {
      id: bebidaData.id.toString(),
      sabor: bebidaData.sabor,
      cantidad: bebidaData.cantidad,
      precioCosto: bebidaData.precioCosto,
      precioVenta: bebidaData.precioVenta,
    };
  }
}
