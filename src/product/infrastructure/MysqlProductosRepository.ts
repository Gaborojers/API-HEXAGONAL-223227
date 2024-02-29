/*import { Product } from '../domain/Productos';

interface ProductRepository {
  products: Product[];
  nextId: number;
  addProduct(product: Product): Product;
  getProductById(productId: number): Product | null;
  getAllProducts(): Product[];
  updateProduct(updatedProduct: Product): Product | null;
  deleteProduct(productId: number): boolean;
}

export class MysqlProductRepository implements ProductRepository {
  public products: Product[] = [];
  public nextId: number = 1;

  addProduct(product: Product): Product {
    const newProduct = new Product(this.nextId++, product.name, product.description, product.price);
    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(productId: number): Product | null {
    const product = this.products.find((p) => p.id === productId);
    return product ? { ...product } : null;
  }

  getAllProducts(): Product[] {
    return this.products.map((product) => ({ ...product }));
  }

  updateProduct(updatedProduct: Product): Product | null {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);

    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
      return { ...updatedProduct };
    }

    return null;
  }

  deleteProduct(productId: number): boolean {
    const index = this.products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}*/

import { query } from "../../database/mysql";
import { Product } from "../domain/Productos";
import { ProductRepository } from "../domain/ProductosRepository";

export class MysqlProductRepository implements ProductRepository {
  async addProduct(prod: Product): Promise<Product | null> {
    let product = null;
    const sql =
      "INSERT INTO product (name, description, price) VALUES (?, ?, ?)";
    const params: any[] = [prod.name, prod.description, prod.price];
    try {
      const [result]: any = await query(sql, params);
      product = new Product(
        result.insertId,
        prod.name,
        prod.description,
        prod.price
      );
    } catch (error) {
      product = null;
    } finally {
      return product;
    }
  }

  async getProductById(productId: number): Promise<Product | null> {
    const sql = "SELECT * FROM product WHERE id=?";
    const params: any[] = [productId];
    try {
      const [result]: any = await query(sql, params);
      if (result.length > 0) {
        const productData = result[0];
        return new Product(productData.id, productData.name, productData.description, productData.price);
      }
      return null;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  }

  async getAllProducts(): Promise<Product[]> {
    const sql = "SELECT * FROM product";
    try {
      const [result]: any = await query(sql, []);
      return result.map((productData: any) => new Product(productData.id, productData.name, productData.description, productData.price));
    } catch (error) {
      console.error("Error fetching all products:", error);
      return [];
    }
  }

  async updateProduct(updatedProduct: Product): Promise<Product | null> {
    const sql = "UPDATE product SET name=?, description=?, price=? WHERE id=?";
    const params: any[] = [updatedProduct.name, updatedProduct.description, updatedProduct.price, updatedProduct.id];
    try {
      await query(sql, params);
      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      return null;
    }
  }

  async deleteProduct(productId: number): Promise<boolean> {
    const sql = "DELETE FROM product WHERE id=?";
    const params: any[] = [productId];
    try {
      await query(sql, params);
      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      return false;
    }
  }
}