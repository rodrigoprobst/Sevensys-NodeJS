import { Request, Response } from "express";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { log } from "util";

export class ProductController {
  public async index(req: Request, res: Response) {
    try {
      const list = await Product.findAndCountAll();
      return res.status(200).json({
        response: "OK",
        list
      });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [{ model: Category }]
      });

      if (!product) {
        return res
          .status(400)
          .json({ response: "error", message: "Product not found!" });
      }

      return res.status(200).json({
        response: "OK",
        product
      });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async save(req: Request, res: Response) {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json({ response: "OK", product });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ response: "error", message: "Product not found!" });
      }

      const updated = await product.update(req.body);

      return res.status(200).json({ response: "OK", updated });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        return res
          .status(404)
          .json({ response: "error", message: "Product not found!" });
      }

      const destroyed = await product.destroy();

      return res.status(200).json({ response: "OK", destroyed });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async stock(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { type, quantity } = req.body;
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          response: "error",
          result: false,
          message: "Product not found!"
        });
      }

      if (type === "IN") product.stock += quantity;
      else product.stock -= quantity;

      await product.save();

      return res
        .status(200)
        .json({ response: "OK", result: true, message: "OK" });
    } catch (error) {
      return res.status(400).json({ response: "error", result: false, error });
    }
  }
}
