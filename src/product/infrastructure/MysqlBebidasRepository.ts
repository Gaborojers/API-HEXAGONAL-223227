// mysqlBebidasRepository.ts
import { query } from "../../database/mysql";
import { BebidasModel } from "../domain/Bebidas";
import { BebidasRepository } from "../domain/BebidasRepository";

export class MysqlBebidasRepository implements BebidasRepository {
  private tableName = "bebidas";

  async agregarBebida(
    sabor: string,
    cantidad: number,
    precioCosto: number, 
    precioVenta: number
  ): Promise<BebidasModel | null> {
    const sql =
      "INSERT INTO bebidas (sabor, cantidad, precioCosto, precioVenta) VALUES (?, ?, ?, ?)";
    const params: any[] = [sabor, cantidad, precioCosto, precioVenta];

    try {
      const [result]: any = await query(sql, params);
      return {
        id: result.insertId.toString(),
        sabor,
        cantidad,
        precioCosto,
        precioVenta,
      };
    } catch (error) {
      console.error(error);
      return null;
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

      const bebidaData = result[0];
      return {
        id: bebidaData.id.toString(),
        sabor: bebidaData.sabor,
        cantidad: bebidaData.cantidad,
        precioCosto: bebidaData.precioCosto,
        precioVenta: bebidaData.precioVenta,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async obtenerTodasBebidas(): Promise<BebidasModel[]> {
    const sql = "SELECT * FROM bebidas";

    try {
      const [data]: any = await query(sql, []);
      const dataBebidas = Object.values(JSON.parse(JSON.stringify(data)));

      return dataBebidas.map(
        (bebida: any) =>
          ({
            id: bebida.id.toString(),
            sabor: bebida.sabor,
            cantidad: bebida.cantidad,
            precioCosto: bebida.precioCosto,
            precioVenta: bebida.precioVenta,
          } as BebidasModel)
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async actualizarBebida(
    id: string,
    sabor: string,
    cantidad: number,
    precioCosto: number,
    precioVenta: number
  ): Promise<BebidasModel | null> {
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
      return null;
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
      return false;
    }
  }
}
