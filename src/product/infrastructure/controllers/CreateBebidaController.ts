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
        // HTTP Code: 201 -> Creado
        res.status(201).json({
          status: "success",
          data: {
            id: bebida.id,
            sabor: bebida.sabor,
            cantidad: bebida.cantidad,
            precioCosto: bebida.precioCosto,
            precioVenta: bebida.precioVenta,
            // Otros campos del modelo si es necesario
          },
        });
      } else {
        // HTTP Code: 204 Sin contenido
        res.status(204).json({
          status: "error",
          data: "No fue posible agregar el registro",
        });
      }
    } catch (error) {
      // Comprobación de tipo para error
      if (error instanceof Error) {
        // Acceder a la propiedad message
        const errorMessage = error.message;

        // HTTP Code: 204 Sin contenido
        res.status(204).json({
          status: "error",
          data: "Ocurrió un error",
          message: errorMessage,
        });
      } else {
        // En este punto, 'error' es de tipo 'unknown', así que puedes manejarlo según tus necesidades
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
