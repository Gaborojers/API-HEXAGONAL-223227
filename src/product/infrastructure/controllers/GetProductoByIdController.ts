import { Request, Response } from "express";
import { GetProductByIdUseCase } from "../../application/GetProductoByIdUseCase";

export class GetProductByIdController {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase
  ) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const product = await this.getProductByIdUseCase.run(parseInt(id, 10));

      if (product) {
        res.status(200).send({
          status: "success",
          data: {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
          },
        });
      } else {
        res.status(404).json({
          status: "error",
          data: "Producto no encontrado",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;

        res.status(500).json({
          status: "error",
          data: "Ocurrió un error",
          message: errorMessage,
        });
      } else {
        console.error("Error desconocido:", error);

        res.status(500).json({
          status: "error",
          data: "Ocurrió un error desconocido",
        });
      }
    }
  }
}
