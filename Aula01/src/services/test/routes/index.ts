import { Request, Response, NextFunction } from "express";
export class testeRoutes {
  public path: String = "/test";

  public routes(app): void {
    app
      .route(`${this.path}`)
      .get((req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ msg: "OK" });
      });
  }
}
