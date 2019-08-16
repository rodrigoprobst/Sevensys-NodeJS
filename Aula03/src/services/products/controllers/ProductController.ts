import { Request, Response } from "express";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export class ProductController {
  public async index(req: Request, res: Response) {
    await Product.findAndCountAll()
      .then(list => {
        return res.status(200).json({
          response: "OK",
          list
        });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ response: "error", message: "Product not found!" });
      });
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;
    await Product.findByPk(id, {
      include: [{ model: Category }]
    })
      .then(async product => {
        return res.status(200).json({
          response: "OK",
          product
        });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ response: "error", message: "Product not found!" });
      });
  }

  public async save(req: Request, res: Response) {
    await Product.create(req.body)
      .then(product => {
        return res.status(200).json({ response: "OK", product });
      })
      .catch(erro => {
        return res.status(400).json({ response: "error", erro });
      });
  }

  public async edit(req: Request, res: Response) {
    const { id } = req.params;
    await Product.findByPk(id)
      .then(async product => {
        await product
          .update(req.body)
          .then(product => {
            return res.status(200).json({ response: "OK", product });
          })
          .catch(error => {
            return res.status(400).json({ response: "error", error });
          });
      })
      .catch(() => {
        return res
          .status(404)
          .json({ response: "error", message: "Product not found!" });
      });
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await Product.findByPk(id)
      .then(async product => {
        await product
          .destroy()
          .then(product => {
            return res.status(200).json({ response: "OK", product });
          })
          .catch(error => {
            return res.status(400).json({ response: "error", error });
          });
      })
      .catch(() => {
        return res
          .status(404)
          .json({ response: "error", message: "Product not found!" });
      });
  }
}
