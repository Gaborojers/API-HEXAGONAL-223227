import { query } from "../../database/mysql";
import { Product } from "../domain/Productos";
import { ProductRepository } from "../domain/ProductosRepository";

export class MysqlProductRepository implements ProductRepository {
  async agregarProducto(
    nombre: string,
    cantidad: number,
    precioVenta: number
  ): Promise<Product | null> {
    const sql =
      "INSERT INTO productos (nombre, cantidad, precioVenta) VALUES (?, ?, ?)";
    const params: any[] = [nombre, cantidad, precioVenta];

    try {
      const [result]: any = await query(sql, params);

      return new Product( 
        result.insertId.toString(),
        nombre,
        cantidad.toString(), 
        precioVenta
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async obtenerProductoPorId(id: string): Promise<Product | null> {
    const sql = "SELECT * FROM productos WHERE id = ?";
    const params: any[] = [id];

    try {
      const [result]: any = await query(sql, params);

      if (result.length === 0) {
        return null;
      }

      const productData = result[0];
      return new Product(
        productData.id.toString(),
        productData.nombre,
        productData.cantidad,
        productData.precioVenta
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async obtenerTodosProductos(): Promise<Product[]> {
    const sql = "SELECT * FROM productos";

    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id.toString(),
            product.nombre,
            product.cantidad,
            product.precioVenta
          )
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async actualizarProducto(
    id: string,
    nombre: string,
    cantidad: number,
    precioVenta: number
  ): Promise<Product | null> {
    const sql =
      "UPDATE productos SET nombre = ?, cantidad = ?, precioVenta = ? WHERE id = ?";
    const params: any[] = [nombre, cantidad, precioVenta, id];

    try {
      const [result]: any = await query(sql, params);

      if (result.affectedRows === 0) {
        return null;
      }

      return new Product(
        result.insertId.toString(),
        nombre,
        cantidad.toString(),
        precioVenta
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async eliminarProducto(id: string): Promise<boolean> {
    const sql = "DELETE FROM productos WHERE id = ?";
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
