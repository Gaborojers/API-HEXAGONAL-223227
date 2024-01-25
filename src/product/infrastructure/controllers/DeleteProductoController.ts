import { Request, Response } from "express";
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
      const product = this.productRepository.getProductById(Number(productId));

      // Verificar si el producto existe antes de intentar eliminarlo
      if (product) {
        const isDeleted = await this.deleteProductUseCase.run(product.id);

        // Devolver true si el producto existía y se eliminó correctamente
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

// Crear instancias adecuadas de ProductRepository y DeleteProductUseCase
const productRepository = new ProductRepository(); // Asegúrate de que ProductRepository esté correctamente implementado
const deleteProductUseCase = new DeleteProductUseCase(); // Asegúrate de que DeleteProductUseCase esté correctamente implementado

// Crear instancia de DeleteProductoController
const deleteProductController = new DeleteProductoController(productRepository, deleteProductUseCase);
