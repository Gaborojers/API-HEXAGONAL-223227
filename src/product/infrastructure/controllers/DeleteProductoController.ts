import { Request, Response } from "express";
import { Product } from '../../domain/Productos';
import { ProductRepository } from '../../domain/ProductosRepository';
import { DeleteProductUseCase } from '../../application/DeleteProductosUseCase';

export class DeleteProductoController {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly deleteProductUseCase: DeleteProductUseCase
  ) {}

  async run(req: Request, res: Response) {
    const productId = req.params.id; // Obtener el ID desde los parámetros de la URL

    try {
      const product: Product | null = this.productRepository.getProductById(Number(productId));

      // Verifica si el producto existe antes de intentar eliminarlo
      if (product) {
        const isDeleted: boolean = await this.deleteProductUseCase.run(product.id);

        // Devuelve true si el producto existía y se eliminó correctamente
        if (isDeleted) {
          res.status(200).send({
            status: "success",
            data: "Producto eliminado correctamente",
          });
        } else {
          // Si no se pudo eliminar el producto
          res.status(500).send({
            status: "error",
            data: "Ocurrió un error al eliminar el producto",
            error: "Error desconocido",
          });
        }
      } else {
        // Si el producto no existe
        res.status(404).send({
          status: "error",
          data: "Producto no encontrado",
        });
      }
    } catch (error) {
      // Manejar errores, puedes imprimirlos o lanzarlos según tu necesidad
      console.error(error);
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error al eliminar el producto",
        error: "Error desconocido",
      });
    }
  }
}
