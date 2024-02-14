import { Request, Response } from "express";
import { CreateUsersUseCase } from "../../application/CreateUsersUseCase";

export class CreateUsersController {
  constructor(readonly createUsersUseCase: CreateUsersUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.createUsersUseCase.run(
        data.nombre,
        data.apellidoP,
        data.apellidoM,
        data.genero,
        data.edad,
        data.correo,
        data.password
      );

      if (user)
        // Code HTTP: 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: user?.id,
            nombre: user?.nombre,
            apellidoP: user?.apellidoP,
            apellidoM: user?.apellidoM,
            genero: user?.genero,
            edad: user?.edad,
            correo: user?.correo,
            password: user?.password
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      // Code HTTP: 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
