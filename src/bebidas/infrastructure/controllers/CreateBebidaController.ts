import { Request, Response } from "express";
import { CreateBebidaUseCase } from "../../application/CreateBebidaUseCase";

export class CreateBebidaController {
  constructor(
    private readonly createBebidaUseCase: CreateBebidaUseCase
  ) {}

  async run(req: Request, res: Response): Promise<void> {
    const { sabor, cantidad, precioCosto, precioVenta } = req.body;

    try {
      const bebida = await this.createBebidaUseCase.run(
        sabor,
        cantidad,
        precioCosto,
        precioVenta
      );

      if (bebida) {
        res.status(201).json({
          status: "success",
          data: {
            id: bebida.id,
            sabor: bebida.sabor,
            cantidad: bebida.cantidad,
            precioCosto: bebida.precioCosto,
            precioVenta: bebida.precioVenta,
          },
        });
      } else {
        res.status(204).json({
          status: "error",
          data: "No fue posible agregar el registro",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;

        res.status(204).json({
          status: "error",
          data: "Ocurrió un error",
          message: errorMessage,
        });
      } else {
        // En este punto, 'error' es de tipo 'unknown'
        console.error("Error desconocido:", error);

        // HTTP Code: 204 Sin contenido
        res.status(204).json({
          status: "error",
          data: "Ocurrió un error desconocido",
        });
      }
    }
  }
}
