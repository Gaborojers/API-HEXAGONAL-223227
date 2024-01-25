import { Request, Response } from "express";
import { EditBebidaUseCase } from "../../application/EditBebidaUseCase";

export class EditBebidaController {
  constructor(private readonly editBebidaUseCase: EditBebidaUseCase) {}

  async run(req: Request, res: Response) {
    const { id, sabor, cantidad } = req.body;

    try {
      const bebida = await this.editBebidaUseCase.run(id, sabor, cantidad);

      if (bebida) {
        res.status(200).send({
          status: "success",
          data: {
            id: bebida.id,
            sabor: bebida.sabor,
            cantidad: bebida.cantidad,
            // Agrega otros campos si es necesario
          },
        });
      } else {
        res.status(404).send({
          status: "error",
          data: "Bebida no encontrada",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({
          status: "error",
          data: "Ocurrió un error",
          message: error.message,
        });
      } else {
        res.status(500).send({
          status: "error",
          data: "Ocurrió un error",
          message: "Error desconocido",
        });
      }
    }
  }
}
