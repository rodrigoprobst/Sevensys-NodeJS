import { Request, Response } from "express";
import { Category } from "../models/Category";

export class CategoryController {
  public async index(req: Request, res: Response) {
    await Category.findAndCountAll().then(list => {
      return res.status(200).json({
        response: "OK",
        list
      });
    });
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;
    await Category.findByPk(id)
      .then(async category => {
        return res.status(200).json({
          response: "OK",
          category
        });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ response: "error", message: "Category not found!" });
      });
  }

  public async save(req: Request, res: Response) {
    await Category.create(req.body)
      .then(category => {
        return res.status(201).json({ response: "OK", category });
      })
      .catch(erro => {
        return res.status(400).json({ response: "error", erro });
      });
  }

  public async edit(req: Request, res: Response) {
    const { id } = req.params;
    await Category.findByPk(id)
      .then(async Category => {
        await Category.update(req.body)
          .then(category => {
            return res.status(200).json({ response: "OK", category });
          })
          .catch(error => {
            return res.status(400).json({ response: "error", error });
          });
      })
      .catch(() => {
        return res
          .status(404)
          .json({ response: "error", message: "Category not found!" });
      });
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await Category.findByPk(id)
      .then(async Category => {
        await Category.destroy()
          .then(category => {
            return res.status(200).json({ response: "OK", category });
          })
          .catch(error => {
            return res.status(400).json({ response: "error", error });
          });
      })
      .catch(() => {
        return res
          .status(404)
          .json({ response: "error", message: "Category not found!" });
      });
  }
}
